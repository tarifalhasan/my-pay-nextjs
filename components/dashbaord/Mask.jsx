import Image from "next/image";

const Mask = ({ title }) => {
  return (
    <div className=" h-[121px] bg-light-info rounded-[12px] flex items-center px-2 sm:px-5 relative overflow-hidden">
      <h2 className=" text-heading-1 text-slate-info">{title}</h2>
      <Image
        width={168}
        height={165}
        quality={100}
        src={"/assets/images/product-review .png"}
        alt="detail de ticket"
        className="absolute  left-[82%]"
      />
    </div>
  );
};

export default Mask;
