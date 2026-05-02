import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authClient } from "@/lib/auth-client";

interface CartItem {
  itemId: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  increaseOrAddItem: (itemId: number) => Promise<void>;
  decreaseOrRemoveItem: (itemId: number) => Promise<void>;
  removeItem: (itemId: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      setItems: (items: CartItem[]) => {
        set({ items });
      },
      increaseOrAddItem: async (itemId: number) => {
        try {
          const session = await authClient.getSession();

          if (session?.data) {
            await fetch("/api/cart/increaseOrAddItem", {
              method: "POST",
              body: JSON.stringify({ itemId, quantity: 1 }),
            });
          }

          const currentItems = get().items;
          const existingItem = currentItems.find(i => i.itemId === itemId);

          if (existingItem) {
            set({
              items: currentItems.map(i =>
                i.itemId === itemId ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            });
          } else {
            set({ items: [...currentItems, { itemId, quantity: 1 }] });
          }
        } catch (error) {
          console.error(error);
        }
      },
      decreaseOrRemoveItem: async (itemId: number) => {
        try {
          const session = await authClient.getSession();

          if (session?.data) {
            await fetch("/api/cart/decreaseOrRemoveItem", {
              method: "POST",
              body: JSON.stringify({ itemId }),
            });
          }

          const currentItems = get().items;
          const existingItem = currentItems.find(i => i.itemId === itemId);

          if (existingItem && existingItem.quantity > 1) {
            set({
              items: currentItems.map(i =>
                i.itemId === itemId ? { ...i, quantity: i.quantity - 1 } : i,
              ),
            });
          } else {
            set({
              items: currentItems.filter(i => i.itemId !== itemId),
            });
          }
        } catch (error) {
          console.error(error);
        }
      },
      removeItem: async (itemId: number) => {
        try {
          const session = await authClient.getSession();

          if (session?.data) {
            await fetch("/api/cart/removeItem", {
              method: "DELETE",
              body: JSON.stringify({ itemId }),
            });
          }

          const currentItems = get().items;

          set({
            items: currentItems.filter(i => i.itemId !== itemId),
          });
        } catch (error) {
          console.error(error);
        }
      },
      clearCart: async () => {
        const session = await authClient.getSession();

        if (session?.data) {
          try {
            await fetch("/api/cart/clearCart", {
              method: "DELETE",
            });

            set({
              items: [],
            });
          } catch (error) {
            console.error(error);
          }
        }
      },
    }),
    { name: "cart-storage" },
  ),
);
