import Footer from "@/components/landing/Footer";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
