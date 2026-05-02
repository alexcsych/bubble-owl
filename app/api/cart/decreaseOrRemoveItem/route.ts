import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { itemId } = await req.json();

    if (!itemId) {
      return new NextResponse("Item ID is required", { status: 400 });
    }

    const userId = session.user.id;

    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId,
        itemId,
      },
    });

    if (!existingCartItem) {
      return new NextResponse("Item not found in cart", { status: 404 });
    }

    if (existingCartItem.quantity > 1) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: {
          quantity: {
            decrement: 1,
          },
        },
      });
      return NextResponse.json(updatedItem);
    } else {
      await prisma.cartItem.delete({
        where: { id: existingCartItem.id },
      });
      return NextResponse.json(
        { message: "Item removed from cart" },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("[CART_REMOVE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
