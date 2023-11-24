"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarOpen";
import DashboardHeader from "../Header/DashboardHeader";
import Sidebar from "../sidebar/DashboardSidebar";
const DashboardLayout = ({ childrens }) => {
  const { openSidebar } = useSidebar();

  return (
    <div className="flex items-start gap-2">
      <div
        className={cn(
          "hidden xl:block fixed bg-white h-full  bg-opacity-60  z-50  min-h-screen  transition-all duration-700  min-w-[268px]",
          openSidebar ? "left-0  translate-x-0 " : "-translate-x-[100%]"
        )}
      >
        {" "}
        <Sidebar />
      </div>
      <main
        className={cn(
          "flex-1 w-full relative overflow-hidden    px-2 sm:px-4 xl:px-10",
          openSidebar ? "xl:ml-[268px]" : "ml-0"
        )}
      >
        <DashboardHeader />
        {childrens}
      </main>
    </div>
  );
};

export default DashboardLayout;
