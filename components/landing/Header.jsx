"use client";
import logo from "@/public/assets/images/Logo (1).svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const LandingHeader = ({ showBackButton }) => {
  const router = useRouter();
  return (
    <header className="flex    container py-7 items-center justify-between bg-transparent">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <Image className=" w-[90%] sm:w-full " src={logo} alt="logo" />
        </Link>
        {showBackButton && (
          <button onClick={() => router.back()}>
            <GoArrowLeft className=" text-5xl text-white" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Image
          src={"/assets/images/Arrow Up Icon.svg"}
          alt=""
          width={34}
          height={34}
        />
        <p className=" text-[1rem] sm:text-t-22">Espace client</p>
      </div>
    </header>
  );
};

export default LandingHeader;
