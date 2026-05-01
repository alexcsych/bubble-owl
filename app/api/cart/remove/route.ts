import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function DELETE (req: Request) {
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

    const deleteResult = await prisma.cartItem.deleteMany({
      where: {
        userId,
        itemId,
      },
    });

    if (deleteResult.count === 0) {
      return new NextResponse("Item not found in cart", { status: 404 });
    }

    return NextResponse.json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("[CART_REMOVE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
