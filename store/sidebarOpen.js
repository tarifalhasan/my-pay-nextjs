import { create } from "zustand";

export const useSidebar = create((set) => ({
  openSidebar: true,
  handleOpenSidebar() {
    set((state) => ({ openSidebar: !state.openSidebar }));
  },
}));
