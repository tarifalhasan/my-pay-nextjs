import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href={"/"}>
            <Image
              src={"/assets/images/white_logo.svg"}
              alt="logo"
              width={53}
              height={53}
            />
          </Link>
          <p className="mt-2 pt-5 text-sm  text-white opacity-70">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-[33.333333333%] md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base  mb-3">
              Usefull Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Content
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Terms & Services
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-[33.333333333%] md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base  mb-3">
              Community
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Suggestions
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Newsletters
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-[33.333333333%] md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base  mb-3">
              Partner
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Our Partner
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white opacity-70 hover:opacity-90"
                >
                  Become a Partner
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" container">
        <Separator className="bg-[#3F3E45]" />
        <div className="container  mx-auto py-5  flex flex-wrap flex-col sm:flex-row">
          <p className="text-white opacity-60 text-sm text-center sm:text-left">
            Copyright © 202X EvoFin. All Rights Reserved.
          </p>
          <span className="inline-flex  gap-6 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={"/"} target="_blank">
              <FaInstagram className=" text-white  text-2xl transition-all duration-500 hover:text-pink-500" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaFacebook className=" text-white  text-2xl transition-all duration-500 hover:text-pink-500" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaTwitter className=" text-white  text-2xl transition-all duration-500 hover:text-pink-500" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaLinkedin className=" text-white  text-2xl transition-all duration-500 hover:text-pink-500" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
