import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { itemId, quantity } = await req.json();

    if (!itemId) {
      return new NextResponse("Item ID is required", { status: 400 });
    }

    if (!quantity) {
      return new NextResponse("Quantity is required", { status: 400 });
    }

    const userId = session.user.id;

    const cartItem = await prisma.cartItem.upsert({
      where: {
        userId_itemId: {
          userId,
          itemId,
        },
      },
      update: {
        quantity: { increment: quantity },
      },
      create: {
        userId,
        itemId,
        quantity,
      },
    });

    return NextResponse.json(cartItem);
  } catch (error) {
    console.error("[CART_ADD_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
