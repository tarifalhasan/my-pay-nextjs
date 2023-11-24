import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center px-4 py-3 gap-4">
      <Image
        width={33}
        height={32.943}
        src={"/assets/images/Logo.svg"}
        alt="sereno"
      />
      <h2 className="text-[1.5rem] font-semibold text-foreground">MyPay</h2>
    </div>
  );
};

export default Logo;
