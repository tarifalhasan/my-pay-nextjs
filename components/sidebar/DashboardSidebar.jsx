"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { cn } from "../../lib/utils";
import NotifactionIcon from "../svg/NotifactionIcon";
import Logo from "../ui/Logo";

const Sidebar = ({ sidebarData }) => {
  const [isOpenChild, setIsOpenChild] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);

  const handleClickLink = (i) => {
    setClickIndex(i);
    setIsOpenChild(true);
  };
  const pathName = usePathname();

  return (
    <Scrollbars
      style={{
        width: "100%",
        height: "100%",
      }}
      className="custom-scrollbar"
      scrollbarWidth={0}
    >
      <div
        className={cn(
          " xl:border-r border-light-gray  h-full left-0 top-0 bottom-0 w-full xl:px-5 py-5  "
        )}
      >
        <div className="space-y-4">
          <Logo />
          <div className=" py-3">
            <Select>
              <SelectTrigger className=" w-full px-0  text-base focus:ring-0 focus:rounded-none border-none focus:outline-none outline-none !font-semibold">
                <SelectValue placeholder="Nom Entreprise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Nom Entreprise</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button className="text-sm flex items-center justify-center text-white w-full rounded-[3px] bg-primary-blue py-3 px-2 font-semibold active:opacity-60">
            Ajouter une entreprise
          </button>

          <div className="flex pt-5 pb-6 items-center justify-between">
            <div className=" inline-flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className="text-sm text-gray-550 font-medium">
                Nom du compte
              </h4>
            </div>
            <NotifactionIcon />
          </div>
          <Separator />
        </div>
        <div>
          <p className="text-xs pt-8 pb-4 pl-4 font-semibold text-gray-md">
            PAGES
          </p>
          <ul className="flex flex-col gap-y-[10px] ">
            {sidebarData.map((item, i) => (
              <li key={i} onClick={() => handleClickLink(i)}>
                <Link style={{ padding: "" }} href={item.href}>
                  <button
                    className={cn(
                      "flex items-center    text-sm  text-dark-gray gap-2  w-full rounded-[3px]  py-3 px-2 font-semibold active:opacity-60",
                      pathName === item.href && " bg-primary-blue  text-white"
                    )}
                  >
                    {React.cloneElement(item.icon, {
                      className: cn(
                        pathName === item.href
                          ? "fill-white text-5xl"
                          : "fill-gray-md"
                      ),
                    })}
                    <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                      {item.label}
                    </span>
                  </button>
                </Link>
                {item.children && isOpenChild && clickIndex === i && (
                  <ul className=" pl-10 pt-3 space-y-2">
                    {item.children.map((data, index) => (
                      <li key={index} onClick={() => setIsOpenChild(false)}>
                        <Link style={{ padding: "" }} href={data.href}>
                          <button
                            className={cn(
                              "flex items-center    text-sm  text-dark-gray gap-2  w-full rounded-[3px]  py-3 px-2 font-semibold active:opacity-60",
                              pathName === data.href && " text-primary-blue"
                            )}
                          >
                            {React.cloneElement(data.icon, {
                              className: cn(
                                pathName === data.href
                                  ? "fill-primary-blue text-5xl"
                                  : "fill-gray-md"
                              ),
                            })}
                            <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                              {data.label}
                            </span>
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs pt-8 pb-4 pl-4 font-semibold text-gray-md">
            OTHERS
          </p>
          <ul className="flex flex-col gap-y-[10px] ">
            <li>
              <Link className="flex items-center justify-between" href={"/"}>
                <span
                  className={cn(
                    "flex items-center    text-sm  text-dark-gray gap-2  w-full rounded-[3px]  py-3 px-2 font-semibold active:opacity-60",
                    pathName === "/avatar" && " bg-primary-blue  text-white"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={cn(
                      pathName === "/avatar"
                        ? "fill-white text-5xl"
                        : "fill-gray-md"
                    )}
                  >
                    <path d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V8.3C4.5 7.8 4.675 7.375 5.025 7.025C5.375 6.675 5.8 6.5 6.3 6.5H8.25V6.25C8.25 5.21667 8.61667 4.33333 9.35 3.6C10.0833 2.86667 10.9667 2.5 12 2.5C13.0333 2.5 13.9167 2.86667 14.65 3.6C15.3833 4.33333 15.75 5.21667 15.75 6.25V6.5H17.7C18.2 6.5 18.625 6.675 18.975 7.025C19.325 7.375 19.5 7.8 19.5 8.3V19.7C19.5 20.2 19.325 20.625 18.975 20.975C18.625 21.325 18.2 21.5 17.7 21.5H6.3ZM6.3 20H17.7C17.7667 20 17.8333 19.9667 17.9 19.9C17.9667 19.8333 18 19.7667 18 19.7V8.3C18 8.23333 17.9667 8.16667 17.9 8.1C17.8333 8.03333 17.7667 8 17.7 8H15.75V10.25C15.75 10.4667 15.6793 10.6457 15.538 10.787C15.396 10.929 15.2167 11 15 11C14.7833 11 14.6043 10.929 14.463 10.787C14.321 10.6457 14.25 10.4667 14.25 10.25V8H9.75V10.25C9.75 10.4667 9.67933 10.6457 9.538 10.787C9.396 10.929 9.21667 11 9 11C8.78333 11 8.60433 10.929 8.463 10.787C8.321 10.6457 8.25 10.4667 8.25 10.25V8H6.3C6.23333 8 6.16667 8.03333 6.1 8.1C6.03333 8.16667 6 8.23333 6 8.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20ZM9.75 6.5H14.25V6.25C14.25 5.61667 14.0333 5.08333 13.6 4.65C13.1667 4.21667 12.6333 4 12 4C11.3667 4 10.8333 4.21667 10.4 4.65C9.96667 5.08333 9.75 5.61667 9.75 6.25V6.5ZM6 20V8V20Z" />
                  </svg>
                  <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                    Avatar
                  </span>
                </span>
                <span>
                  <Badge variant="secondary">Coded</Badge>
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between" href={"/"}>
                <span
                  className={cn(
                    "flex items-center    text-sm  text-dark-gray gap-2  w-full rounded-[3px]  py-3 px-2 font-semibold active:opacity-60",
                    pathName === "/avatar" && " bg-primary-blue  text-white"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={cn(
                      pathName === "/avatar"
                        ? "fill-white text-5xl"
                        : "fill-gray-md"
                    )}
                  >
                    <path d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V8.3C4.5 7.8 4.675 7.375 5.025 7.025C5.375 6.675 5.8 6.5 6.3 6.5H8.25V6.25C8.25 5.21667 8.61667 4.33333 9.35 3.6C10.0833 2.86667 10.9667 2.5 12 2.5C13.0333 2.5 13.9167 2.86667 14.65 3.6C15.3833 4.33333 15.75 5.21667 15.75 6.25V6.5H17.7C18.2 6.5 18.625 6.675 18.975 7.025C19.325 7.375 19.5 7.8 19.5 8.3V19.7C19.5 20.2 19.325 20.625 18.975 20.975C18.625 21.325 18.2 21.5 17.7 21.5H6.3ZM6.3 20H17.7C17.7667 20 17.8333 19.9667 17.9 19.9C17.9667 19.8333 18 19.7667 18 19.7V8.3C18 8.23333 17.9667 8.16667 17.9 8.1C17.8333 8.03333 17.7667 8 17.7 8H15.75V10.25C15.75 10.4667 15.6793 10.6457 15.538 10.787C15.396 10.929 15.2167 11 15 11C14.7833 11 14.6043 10.929 14.463 10.787C14.321 10.6457 14.25 10.4667 14.25 10.25V8H9.75V10.25C9.75 10.4667 9.67933 10.6457 9.538 10.787C9.396 10.929 9.21667 11 9 11C8.78333 11 8.60433 10.929 8.463 10.787C8.321 10.6457 8.25 10.4667 8.25 10.25V8H6.3C6.23333 8 6.16667 8.03333 6.1 8.1C6.03333 8.16667 6 8.23333 6 8.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20ZM9.75 6.5H14.25V6.25C14.25 5.61667 14.0333 5.08333 13.6 4.65C13.1667 4.21667 12.6333 4 12 4C11.3667 4 10.8333 4.21667 10.4 4.65C9.96667 5.08333 9.75 5.61667 9.75 6.25V6.5ZM6 20V8V20Z" />
                  </svg>
                  <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                    Avatar
                  </span>
                </span>
                <span>
                  <Badge variant="outline">Coded</Badge>
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between" href={"/"}>
                <span
                  className={cn(
                    "flex items-center    text-sm  text-dark-gray gap-2  w-full rounded-[3px]  py-3 px-2 font-semibold active:opacity-60",
                    pathName === "/avatar" && " bg-primary-blue  text-white"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={cn(
                      pathName === "/avatar"
                        ? "fill-white text-5xl"
                        : "fill-gray-md"
                    )}
                  >
                    <path d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V8.3C4.5 7.8 4.675 7.375 5.025 7.025C5.375 6.675 5.8 6.5 6.3 6.5H8.25V6.25C8.25 5.21667 8.61667 4.33333 9.35 3.6C10.0833 2.86667 10.9667 2.5 12 2.5C13.0333 2.5 13.9167 2.86667 14.65 3.6C15.3833 4.33333 15.75 5.21667 15.75 6.25V6.5H17.7C18.2 6.5 18.625 6.675 18.975 7.025C19.325 7.375 19.5 7.8 19.5 8.3V19.7C19.5 20.2 19.325 20.625 18.975 20.975C18.625 21.325 18.2 21.5 17.7 21.5H6.3ZM6.3 20H17.7C17.7667 20 17.8333 19.9667 17.9 19.9C17.9667 19.8333 18 19.7667 18 19.7V8.3C18 8.23333 17.9667 8.16667 17.9 8.1C17.8333 8.03333 17.7667 8 17.7 8H15.75V10.25C15.75 10.4667 15.6793 10.6457 15.538 10.787C15.396 10.929 15.2167 11 15 11C14.7833 11 14.6043 10.929 14.463 10.787C14.321 10.6457 14.25 10.4667 14.25 10.25V8H9.75V10.25C9.75 10.4667 9.67933 10.6457 9.538 10.787C9.396 10.929 9.21667 11 9 11C8.78333 11 8.60433 10.929 8.463 10.787C8.321 10.6457 8.25 10.4667 8.25 10.25V8H6.3C6.23333 8 6.16667 8.03333 6.1 8.1C6.03333 8.16667 6 8.23333 6 8.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20ZM9.75 6.5H14.25V6.25C14.25 5.61667 14.0333 5.08333 13.6 4.65C13.1667 4.21667 12.6333 4 12 4C11.3667 4 10.8333 4.21667 10.4 4.65C9.96667 5.08333 9.75 5.61667 9.75 6.25V6.5ZM6 20V8V20Z" />
                  </svg>
                  <div>
                    <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                      Avatar
                    </span>
                    <small className="text-xs font-normal text-gray-md">
                      8+ Basic Components
                    </small>
                  </div>
                </span>
                <span>
                  <Badge variant="secondaryCircle">9</Badge>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className=" py-12">
          <Link href={"/sign-out"} passHref legacyBehavior>
            <a className="  inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11.6878 19.25C11.6878 19.6295 11.3798 19.9375 11.0003 19.9375H7.33366C4.93291 19.9375 2.97949 17.9841 2.97949 15.5833V6.41667C2.97949 4.01592 4.93291 2.0625 7.33366 2.0625H11.0003C11.3798 2.0625 11.6878 2.3705 11.6878 2.75C11.6878 3.1295 11.3798 3.4375 11.0003 3.4375H7.33366C5.69099 3.4375 4.35449 4.774 4.35449 6.41667V15.5833C4.35449 17.226 5.69099 18.5625 7.33366 18.5625H11.0003C11.3798 18.5625 11.6878 18.8705 11.6878 19.25ZM18.8195 10.5141L15.1528 6.84747C14.8842 6.57889 14.4488 6.57889 14.1802 6.84747C13.9117 7.11606 13.9117 7.55151 14.1802 7.82009L16.6736 10.3134H9.16699C8.78749 10.3134 8.47949 10.6214 8.47949 11.0009C8.47949 11.3804 8.78749 11.6884 9.16699 11.6884H16.6736L14.1802 14.1817C13.9117 14.4503 13.9117 14.8857 14.1802 15.1543C14.3141 15.2882 14.4901 15.356 14.6661 15.356C14.8421 15.356 15.0181 15.2891 15.1519 15.1543L18.8186 11.4877C19.0881 11.2172 19.0881 10.7827 18.8195 10.5141Z"
                  fill="#5A6A85"
                />
              </svg>

              <span className="text-sm text-gray-md">Se déconnecter</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Image
            src={"/assets/images/rocket1 1.png"}
            alt="rocket"
            width={136}
            height={124}
            quality={100}
          />
        </div>
      </div>
    </Scrollbars>
  );
};

export default Sidebar;
