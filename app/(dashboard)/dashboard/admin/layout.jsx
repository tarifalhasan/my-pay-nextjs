import DashboardLayout from "@/components/Layout/DashboardLayout";
import { AdminsidebarData } from "@/constants/sidebar";

const Layout = ({ children }) => {
  return (
    <DashboardLayout sidebarData={AdminsidebarData} childrens={children} />
  );
};

export default Layout;
