import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Filament, Product, Warranty } from "@/types";

interface CartStore {
  items: {
    product: Product;
    filament: Filament | null;
    warranty: Warranty | null;
  }[];
  addItem: (
    data: Product,
    selectedFilament: Filament | null,
    selectedWarranty: Warranty | null
  ) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (
        data: Product,
        selectedFilament: Filament | null,
        selectedWarranty: Warranty | null
      ) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === data.id
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({
          items: [
            ...get().items,
            {
              product: data,
              warranty: selectedWarranty,
              filament: selectedFilament,
            },
          ],
        });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.product.id !== id)],
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
