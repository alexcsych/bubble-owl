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
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      setItems: (items: CartItem[]) => {
        set({ items });
      },
      increaseOrAddItem: async (itemId: number) => {
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

        const session = await authClient.getSession();

        if (session?.data) {
          try {
            await fetch("/api/cart/increaseOrAdd", {
              method: "POST",
              body: JSON.stringify({ itemId, quantity: 1 }),
            });
          } catch (error) {
            console.error(error);
          }
        }
      },
      decreaseOrRemoveItem: async (itemId: number) => {
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

        const session = await authClient.getSession();

        if (session?.data) {
          try {
            await fetch("/api/cart/decreaseOrRemove", {
              method: "POST",
              body: JSON.stringify({ itemId }),
            });
          } catch (error) {
            console.error(error);
          }
        }
      },
      removeItem: async (itemId: number) => {
        const currentItems = get().items;

        set({
          items: currentItems.filter(i => i.itemId !== itemId),
        });

        const session = await authClient.getSession();

        if (session?.data) {
          try {
            await fetch("/api/cart/remove", {
              method: "DELETE",
              body: JSON.stringify({ itemId }),
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
