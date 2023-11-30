import DashboardLayout from "@/components/Layout/DashboardLayout";
import { ClientSidebarData } from "@/constants/sidebar";

const Layout = ({ children }) => {
  return (
    <DashboardLayout childrens={children} sidebarData={ClientSidebarData} />
  );
};

export default Layout;
