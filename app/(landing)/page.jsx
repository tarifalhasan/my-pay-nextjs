import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import InformationRequest from "@/components/landing/InformationRequest";
import OurClients from "@/components/landing/OurClients";
import PackSubscribe from "@/components/landing/PackSubscribe";
export default function Home() {
  return (
    <div className="flex relative overflow-hidden flex-col min-h-screen">
      <Hero />
      <PackSubscribe />
      <OurClients />
      <InformationRequest />
      <Footer />
    </div>
  );
}
