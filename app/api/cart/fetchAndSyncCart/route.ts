import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

interface CartItem {
  itemId: number;
  quantity: number;
}

export async function POST (req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const body = await req.json().catch(() => ({}));
    const localItems: CartItem[] = body.localItems || [];

    const validLocalItems = localItems
      .filter(item => item.itemId && typeof item.quantity === "number")
      .map(item => ({
        itemId: item.itemId,
        quantity: Math.min(Math.max(item.quantity, 1), 99),
      }));

    if (!session?.user) {
      if (validLocalItems.length === 0) return NextResponse.json([]);

      const items = await prisma.item.findMany({
        where: { id: { in: validLocalItems.map(i => i.itemId) } },
        include: { tags: true },
        orderBy: { id: "asc" },
      });

      const guestCart = items.map(item => ({
        ...item,
        quantity:
          validLocalItems.find(li => li.itemId === item.id)?.quantity || 1,
      }));

      return NextResponse.json(guestCart);
    }

    const userId = session.user.id;

    if (validLocalItems.length > 0) {
      await Promise.all(
        validLocalItems.map(item =>
          prisma.cartItem.upsert({
            where: { userId_itemId: { userId, itemId: item.itemId } },
            update: { quantity: item.quantity },
            create: { userId, itemId: item.itemId, quantity: item.quantity },
          }),
        ),
      );
    }

    const dbCart = await prisma.cartItem.findMany({
      where: { userId },
      include: { item: { include: { tags: true } } },
      orderBy: { id: "asc" },
    });

    const synchronizedCart = dbCart.map(ci => ({
      ...ci.item,
      quantity: ci.quantity,
    }));

    return NextResponse.json(synchronizedCart, { status: 200 });
  } catch (error) {
    console.error("[CART_FETCH_SYNC_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
