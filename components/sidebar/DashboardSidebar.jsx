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
import { cn } from "../../lib/utils";
import NotifactionIcon from "../svg/NotifactionIcon";
import Logo from "../ui/Logo";

const Sidebar = () => {
  const [isOpenChild, setIsOpenChild] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);

  const handleClickLink = (i) => {
    setClickIndex(i);
    setIsOpenChild(true);
  };
  const pathName = usePathname();

  const DATA = [
    {
      label: "Defaut",
      href: "/dashboard/client",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path d="M10.9988 11.6873C13.6526 11.6873 15.8113 9.52851 15.8113 6.87476C15.8113 4.22101 13.6526 2.06226 10.9988 2.06226C8.34505 2.06226 6.1863 4.22101 6.1863 6.87476C6.1863 9.52851 8.34505 11.6873 10.9988 11.6873ZM10.9988 3.43726C12.8945 3.43726 14.4363 4.97909 14.4363 6.87476C14.4363 8.77042 12.8945 10.3123 10.9988 10.3123C9.10314 10.3123 7.5613 8.77042 7.5613 6.87476C7.5613 4.97909 9.10314 3.43726 10.9988 3.43726ZM18.103 16.4695V17.3963C18.103 18.2534 17.7904 19.0747 17.2221 19.7081C17.0864 19.8603 16.8985 19.9373 16.7096 19.9373C16.5465 19.9373 16.3824 19.8795 16.2513 19.7621C15.968 19.5091 15.9451 19.0747 16.1981 18.7914C16.5401 18.4092 16.7289 17.9142 16.7289 17.3972V16.4704C16.7289 15.0826 15.8085 13.8817 14.4895 13.5508C14.2575 13.4921 14.0082 13.5243 13.8056 13.6389C12.0631 14.6087 9.93087 14.605 8.19929 13.6416C7.99212 13.5233 7.74281 13.4894 7.51089 13.5499C6.19181 13.8817 5.27053 15.0826 5.27053 16.4704V17.3972C5.27053 17.9151 5.4594 18.4101 5.80132 18.7914C6.05432 19.0747 6.03045 19.5091 5.74811 19.7621C5.46395 20.0161 5.02948 19.9913 4.7774 19.709C4.20907 19.0747 3.89648 18.2533 3.89648 17.3972V16.4704C3.89648 14.4519 5.24487 12.7029 7.17537 12.2171C7.74645 12.0723 8.36704 12.1548 8.87487 12.4445C10.1857 13.1741 11.8101 13.1768 13.1319 12.4417C13.6333 12.1557 14.2539 12.0741 14.8268 12.218C16.7546 12.7011 18.103 14.4501 18.103 16.4695Z" />
        </svg>
      ),
    },
    {
      label: "API",
      href: "/dashboard/client/api",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path d="M11 14.4375C10.3201 14.4375 9.65552 14.2359 9.09023 13.8582C8.52493 13.4805 8.08434 12.9436 7.82416 12.3155C7.56399 11.6874 7.49591 10.9962 7.62855 10.3294C7.76119 9.66257 8.08858 9.05006 8.56932 8.56932C9.05006 8.08858 9.66257 7.76119 10.3294 7.62855C10.9962 7.49591 11.6874 7.56399 12.3155 7.82416C12.9436 8.08434 13.4805 8.52493 13.8582 9.09023C14.2359 9.65552 14.4375 10.3201 14.4375 11C14.4365 11.9114 14.0741 12.7852 13.4296 13.4296C12.7852 14.0741 11.9114 14.4365 11 14.4375ZM11 8.9375C10.5921 8.9375 10.1933 9.05846 9.85414 9.28509C9.51496 9.51172 9.2506 9.83384 9.0945 10.2107C8.93839 10.5876 8.89755 11.0023 8.97713 11.4024C9.05671 11.8025 9.25315 12.17 9.54159 12.4584C9.83004 12.7469 10.1975 12.9433 10.5976 13.0229C10.9977 13.1025 11.4124 13.0616 11.7893 12.9055C12.1662 12.7494 12.4883 12.485 12.7149 12.1459C12.9415 11.8067 13.0625 11.4079 13.0625 11C13.062 10.4531 12.8446 9.92882 12.4579 9.54213C12.0712 9.15544 11.5469 8.93799 11 8.9375ZM11.4583 19.9375H10.5417C9.99481 19.937 9.47048 19.7196 9.0838 19.3329C8.69711 18.9462 8.47965 18.4219 8.47917 17.875C8.48032 17.8089 8.46175 17.7439 8.42583 17.6884C8.38992 17.6329 8.33827 17.5894 8.2775 17.5633H8.27017C8.21481 17.5404 8.15389 17.5345 8.09514 17.5462C8.03639 17.558 7.98245 17.5869 7.94017 17.6293C7.55043 18.0147 7.02548 18.2324 6.47742 18.236C5.92935 18.2396 5.4016 18.0288 5.00683 17.6486L4.36517 17.0014C4.17307 16.8098 4.02066 16.5821 3.91667 16.3314C3.81268 16.0808 3.75915 15.8121 3.75915 15.5407C3.75915 15.2693 3.81268 15.0006 3.91667 14.75C4.02066 14.4993 4.17307 14.2717 4.36517 14.08C4.41066 14.0333 4.44157 13.9744 4.4541 13.9104C4.46664 13.8464 4.46026 13.7802 4.43575 13.7198C4.41336 13.6626 4.37446 13.6134 4.32401 13.5785C4.27357 13.5436 4.21386 13.5245 4.1525 13.5236C3.87938 13.5262 3.60843 13.4748 3.35528 13.3723C3.10212 13.2697 2.87176 13.1181 2.67748 12.9261C2.4832 12.7342 2.32883 12.5056 2.22328 12.2537C2.11774 12.0018 2.06309 11.7315 2.0625 11.4583V10.5417C2.06299 9.99481 2.28044 9.47048 2.66713 9.0838C3.05382 8.69711 3.57814 8.47965 4.125 8.47917C4.19103 8.48051 4.25594 8.462 4.31134 8.42605C4.36674 8.3901 4.41008 8.33835 4.43575 8.2775V8.27017C4.45842 8.21477 4.46425 8.15391 4.45251 8.09521C4.44077 8.03652 4.41199 7.98258 4.36975 7.94017C4.17448 7.74963 4.01895 7.52224 3.91218 7.27117C3.8054 7.0201 3.7495 6.75034 3.74771 6.47752C3.74592 6.20469 3.79827 5.93423 3.90175 5.68178C4.00522 5.42933 4.15775 5.19992 4.3505 5.00683L5.00042 4.35692C5.39288 3.98098 5.91536 3.77111 6.45883 3.77111C7.0023 3.77111 7.52478 3.98098 7.91725 4.35692C7.96357 4.40508 8.02321 4.43831 8.08854 4.45235C8.15387 4.4664 8.2219 4.46062 8.28392 4.43575C8.34078 4.41344 8.38966 4.37464 8.42429 4.32433C8.45892 4.27401 8.47771 4.21449 8.47825 4.15342C8.47547 3.88037 8.52674 3.60948 8.62911 3.35633C8.73148 3.10319 8.88293 2.87281 9.07473 2.67845C9.26653 2.4841 9.49489 2.32961 9.74665 2.2239C9.99842 2.11818 10.2686 2.06333 10.5417 2.0625H11.4583C12.0052 2.06299 12.5295 2.28044 12.9162 2.66713C13.3029 3.05382 13.5203 3.57814 13.5208 4.125C13.5176 4.18951 13.5343 4.25346 13.5688 4.3081C13.6032 4.36274 13.6537 4.4054 13.7133 4.43025C13.7713 4.45495 13.8351 4.46263 13.8973 4.45241C13.9594 4.44218 14.0174 4.41446 14.0644 4.3725C14.2559 4.17626 14.4847 4.02033 14.7374 3.9139C14.9901 3.80748 15.2615 3.75271 15.5357 3.75283C15.8066 3.75208 16.0751 3.80508 16.3254 3.90877C16.5757 4.01246 16.803 4.16478 16.9941 4.35692L17.6413 4.99858C17.8328 5.1901 17.9847 5.41747 18.0884 5.66771C18.192 5.91795 18.2454 6.18615 18.2454 6.457C18.2454 6.72785 18.192 6.99605 18.0884 7.24629C17.9847 7.49653 17.8328 7.7239 17.6413 7.91542C17.5926 7.95843 17.5585 8.01545 17.5435 8.07864C17.5286 8.14183 17.5336 8.2081 17.5578 8.26833L17.5633 8.28117C17.5857 8.33768 17.6244 8.38622 17.6746 8.42053C17.7247 8.45483 17.784 8.47334 17.8447 8.47367C18.1183 8.47064 18.3898 8.52188 18.6435 8.62442C18.8971 8.72697 19.1279 8.87879 19.3225 9.0711C19.5171 9.26341 19.6717 9.49239 19.7773 9.74481C19.8828 9.99723 19.9373 10.2681 19.9375 10.5417V11.4583C19.937 12.0052 19.7196 12.5295 19.3329 12.9162C18.9462 13.3029 18.4219 13.5203 17.875 13.5208C17.8105 13.5176 17.7465 13.5343 17.6919 13.5688C17.6373 13.6032 17.5946 13.6537 17.5697 13.7133C17.5454 13.7714 17.5379 13.8351 17.5481 13.8972C17.5583 13.9593 17.5858 14.0173 17.6275 14.0644C17.8225 14.2552 17.9778 14.4828 18.0842 14.734C18.1907 14.9852 18.2463 15.255 18.2477 15.5278C18.2492 15.8007 18.1965 16.0711 18.0927 16.3234C17.9889 16.5757 17.8361 16.8049 17.6431 16.9977L17.0014 17.6449C16.609 18.0209 16.0865 18.2307 15.543 18.2307C14.9995 18.2307 14.477 18.0209 14.0846 17.6449C14.0415 17.5964 13.9845 17.5623 13.9213 17.5474C13.8582 17.5325 13.7919 17.5374 13.7317 17.5615C13.6733 17.5843 13.6229 17.6236 13.5865 17.6745C13.55 17.7254 13.5291 17.7859 13.5263 17.8484C13.5289 18.1217 13.4773 18.3928 13.3745 18.646C13.2717 18.8992 13.1198 19.1296 12.9276 19.3238C12.7353 19.518 12.5065 19.6723 12.2543 19.7776C12.0022 19.8829 11.7316 19.9373 11.4583 19.9375ZM8.88342 16.3332C9.17011 16.4708 9.4128 16.6855 9.58426 16.9533C9.75573 17.2211 9.84919 17.5314 9.85417 17.8493C9.8516 17.9415 9.86745 18.0333 9.90077 18.1193C9.93409 18.2053 9.98422 18.2838 10.0482 18.3502C10.1122 18.4166 10.1889 18.4696 10.2736 18.506C10.3583 18.5425 10.4494 18.5617 10.5417 18.5625H11.4583C11.6407 18.5625 11.8155 18.4901 11.9445 18.3611C12.0734 18.2322 12.1458 18.0573 12.1458 17.875C12.1454 17.5362 12.2453 17.2049 12.4329 16.9229C12.6205 16.6408 12.8874 16.4206 13.2 16.2901C13.5065 16.163 13.8439 16.13 14.1693 16.1953C14.4946 16.2606 14.7932 16.4212 15.0269 16.6567C15.0901 16.7243 15.1662 16.7784 15.2507 16.816C15.3352 16.8537 15.4263 16.874 15.5188 16.8758C15.6112 16.8776 15.7031 16.8608 15.789 16.8265C15.8749 16.7922 15.953 16.741 16.0188 16.676L16.6659 16.0343C16.7951 15.9051 16.8676 15.7298 16.8676 15.5471C16.8676 15.3644 16.7951 15.1892 16.6659 15.0599C16.4305 14.8229 16.2693 14.5223 16.202 14.1951C16.1348 13.8678 16.1644 13.5281 16.2873 13.2174V13.2046L16.2937 13.189C16.4198 12.8817 16.6346 12.619 16.9107 12.4345C17.1868 12.25 17.5117 12.152 17.8438 12.1532C17.9359 12.1556 18.0275 12.1397 18.1134 12.1063C18.1992 12.0729 18.2776 12.0227 18.3438 11.9587C18.41 11.8947 18.4628 11.8181 18.4991 11.7335C18.5354 11.6488 18.5545 11.5578 18.5552 11.4657V10.549C18.5552 10.3667 18.4827 10.1918 18.3538 10.0629C18.2249 9.93393 18.05 9.8615 17.8677 9.8615C17.5317 9.86566 17.2021 9.76926 16.9213 9.58468C16.6405 9.4001 16.4213 9.13577 16.2919 8.82567C16.1588 8.51525 16.1221 8.17195 16.1866 7.8404C16.2512 7.50886 16.4141 7.20441 16.654 6.96667C16.7231 6.90163 16.7783 6.82326 16.8163 6.73629C16.8542 6.64932 16.8742 6.55556 16.8749 6.46067C16.8752 6.37036 16.8575 6.2809 16.8229 6.1975C16.7883 6.11409 16.7374 6.0384 16.6732 5.97483L16.0316 5.32767C15.9676 5.26386 15.8917 5.21329 15.8082 5.17885C15.7247 5.1444 15.6352 5.12676 15.5448 5.12692C15.4543 5.12649 15.3646 5.14419 15.281 5.17898C15.1974 5.21378 15.1216 5.26495 15.0581 5.3295C14.8208 5.56453 14.5203 5.72547 14.1931 5.79269C13.866 5.85991 13.5263 5.83051 13.2156 5.70808L13.2 5.70533L13.1844 5.69892C12.8771 5.5729 12.6145 5.35809 12.4299 5.08196C12.2454 4.80583 12.1475 4.48094 12.1486 4.14883C12.151 4.05676 12.1351 3.96512 12.1017 3.87928C12.0683 3.79343 12.0181 3.7151 11.9541 3.64887C11.8901 3.58264 11.8135 3.52984 11.7289 3.49354C11.6442 3.45725 11.5532 3.4382 11.4611 3.4375H10.5444C10.3621 3.4375 10.1872 3.50993 10.0583 3.63886C9.92935 3.7678 9.85692 3.94266 9.85692 4.125C9.86089 4.46335 9.7629 4.79506 9.57569 5.07693C9.38849 5.3588 9.12074 5.57778 8.80733 5.70533C8.49897 5.8318 8.16031 5.86516 7.83319 5.8013C7.50607 5.73744 7.20483 5.57916 6.96667 5.346C6.90337 5.27899 6.82735 5.22526 6.74305 5.18795C6.65876 5.15064 6.56787 5.1305 6.4757 5.12871C6.38354 5.12692 6.29194 5.14351 6.20626 5.17751C6.12057 5.21151 6.04252 5.26225 5.97667 5.32675L5.32675 5.97667C5.26286 6.04051 5.21218 6.11632 5.17761 6.19976C5.14303 6.2832 5.12523 6.37264 5.12523 6.46296C5.12523 6.55328 5.14303 6.64271 5.17761 6.72616C5.21218 6.8096 5.26286 6.8854 5.32675 6.94925C5.56834 7.18407 5.73398 7.48593 5.80228 7.81584C5.87059 8.14575 5.83841 8.48856 5.70992 8.8C5.69738 8.83138 5.68299 8.86199 5.66683 8.89167C5.52809 9.17682 5.31286 9.41781 5.04514 9.58776C4.77742 9.75772 4.46775 9.84995 4.15067 9.85417C4.05847 9.8516 3.96669 9.86745 3.88069 9.90077C3.79469 9.93409 3.71619 9.98422 3.64979 10.0482C3.58339 10.1122 3.53041 10.1889 3.49396 10.2736C3.45751 10.3583 3.43832 10.4494 3.4375 10.5417V11.4583C3.4375 11.6407 3.50993 11.8155 3.63886 11.9445C3.7678 12.0734 3.94266 12.1458 4.125 12.1458C4.4614 12.1415 4.79134 12.2383 5.07212 12.4236C5.35289 12.609 5.57157 12.8743 5.69983 13.1853L5.70533 13.1973L5.70992 13.2101C5.83284 13.5184 5.86362 13.8557 5.79854 14.1811C5.73345 14.5066 5.57529 14.8061 5.34325 15.0434C5.27563 15.1075 5.22175 15.1847 5.18488 15.2703C5.14801 15.3558 5.12891 15.448 5.12875 15.5412C5.12806 15.6317 5.14546 15.7215 5.17994 15.8052C5.21441 15.889 5.26526 15.965 5.3295 16.0288L5.97667 16.6705C6.10765 16.7956 6.28182 16.8654 6.46296 16.8654C6.6441 16.8654 6.81827 16.7956 6.94925 16.6705C7.18445 16.4295 7.48645 16.2644 7.81632 16.1966C8.14619 16.1288 8.4888 16.1614 8.8 16.2901C8.82857 16.3029 8.85642 16.3173 8.88342 16.3332Z" />
        </svg>
      ),
      children: [
        {
          label: "Log",
          href: "/dashboard/client/api/log",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path d="M17.6338 6.57892L13.5877 2.53269C13.2843 2.22928 12.8818 2.0625 12.4538 2.0625H8.24992C5.84917 2.0625 3.89575 4.01592 3.89575 6.41667V15.5833C3.89575 17.9841 5.84917 19.9375 8.24992 19.9375H13.7499C16.1507 19.9375 18.1041 17.9841 18.1041 15.5833V7.71278C18.1041 7.2847 17.9373 6.88142 17.6338 6.57892ZM13.5208 4.40922L15.7565 6.64494H15.1249C14.2403 6.64494 13.5208 5.92535 13.5208 5.04077V4.40922ZM13.7499 18.5625H8.24992C6.60725 18.5625 5.27075 17.226 5.27075 15.5833V6.41667C5.27075 4.774 6.60725 3.4375 8.24992 3.4375H12.1458V5.04167C12.1458 6.68433 13.4823 8.02083 15.1249 8.02083H16.7291V15.5833C16.7291 17.226 15.3926 18.5625 13.7499 18.5625Z" />
            </svg>
          ),
        },
        {
          label: "Application",
          href: "/dashboard/client/api/application",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path d="M15.5833 2.0625H6.41667C4.01592 2.0625 2.0625 4.01592 2.0625 6.41667V11.9167C2.0625 14.3174 4.01592 16.2708 6.41667 16.2708H10.3125V18.5625H7.33333C6.95383 18.5625 6.64583 18.8705 6.64583 19.25C6.64583 19.6295 6.95383 19.9375 7.33333 19.9375H14.6667C15.0462 19.9375 15.3542 19.6295 15.3542 19.25C15.3542 18.8705 15.0462 18.5625 14.6667 18.5625H11.6875V16.2708H15.5833C17.9841 16.2708 19.9375 14.3174 19.9375 11.9167V6.41667C19.9375 4.01592 17.9841 2.0625 15.5833 2.0625ZM18.5625 11.9167C18.5625 13.5593 17.226 14.8958 15.5833 14.8958H6.41667C4.774 14.8958 3.4375 13.5593 3.4375 11.9167V6.41667C3.4375 4.774 4.774 3.4375 6.41667 3.4375H15.5833C17.226 3.4375 18.5625 4.774 18.5625 6.41667V11.9167Z" />
            </svg>
          ),
        },
      ],
    },
    {
      label: "Transaction",
      href: "/dashboard/client/transactions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 22 22"
        >
          <path
            d="M15.583 10.0833L19.2497 6.41667L15.583 2.75"
            stroke="#5A6A85"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.25 6.41666H8.25"
            stroke="#5A6A85"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.41667 19.25L2.75 15.5833L6.41667 11.9167"
            stroke="#5A6A85"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 15.5833H2.75"
            stroke="#5A6A85"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Support",
      href: "/dashboard/client/support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path d="M15.125 12.1458C13.9874 12.1458 13.0625 13.0708 13.0625 14.2083V17.875C13.0625 19.0126 13.9874 19.9375 15.125 19.9375C16.2626 19.9375 17.1875 19.0126 17.1875 17.875V14.2083C17.1875 13.0708 16.2626 12.1458 15.125 12.1458ZM15.8125 17.875C15.8125 18.2545 15.5045 18.5625 15.125 18.5625C14.7455 18.5625 14.4375 18.2545 14.4375 17.875V14.2083C14.4375 13.8288 14.7455 13.5208 15.125 13.5208C15.5045 13.5208 15.8125 13.8288 15.8125 14.2083V17.875ZM6.875 12.1458C5.73742 12.1458 4.8125 13.0708 4.8125 14.2083V17.875C4.8125 19.0126 5.73742 19.9375 6.875 19.9375C8.01258 19.9375 8.9375 19.0126 8.9375 17.875V14.2083C8.9375 13.0708 8.01258 12.1458 6.875 12.1458ZM7.5625 17.875C7.5625 18.2545 7.2545 18.5625 6.875 18.5625C6.4955 18.5625 6.1875 18.2545 6.1875 17.875V14.2083C6.1875 13.8288 6.4955 13.5208 6.875 13.5208C7.2545 13.5208 7.5625 13.8288 7.5625 14.2083V17.875ZM19.9375 11V15.5833C19.9375 15.9628 19.6295 16.2708 19.25 16.2708C18.8705 16.2708 18.5625 15.9628 18.5625 15.5833V11C18.5625 6.83008 15.1699 3.4375 11 3.4375C6.83008 3.4375 3.4375 6.83008 3.4375 11V15.5833C3.4375 15.9628 3.1295 16.2708 2.75 16.2708C2.3705 16.2708 2.0625 15.9628 2.0625 15.5833V11C2.0625 6.072 6.072 2.0625 11 2.0625C15.928 2.0625 19.9375 6.072 19.9375 11Z" />
        </svg>
      ),
    },
    {
      label: "Créer  ticket",
      href: "/dashboard/client/create-ticket",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path d="M9.85384 2.75V2.0625H8.24967C5.84892 2.0625 3.89551 4.01592 3.89551 6.41667L3.89551 15.5833C3.89551 17.9841 5.84892 19.9375 8.24967 19.9375H9.85384V19.25C9.85384 18.6184 10.3681 18.1042 10.9997 18.1042C11.6313 18.1042 12.1455 18.6184 12.1455 19.25V19.9375H13.7497C16.1504 19.9375 18.1038 17.9841 18.1038 15.5833V6.41667C18.1038 4.01592 16.1504 2.0625 13.7497 2.0625H12.1455V2.75C12.1455 3.38158 11.6313 3.89583 10.9997 3.89583C10.3681 3.89583 9.85384 3.38158 9.85384 2.75ZM13.4252 3.4375H13.7497C15.3923 3.4375 16.7288 4.774 16.7288 6.41667V7.5625H14.6663C14.2868 7.5625 13.9788 7.8705 13.9788 8.25C13.9788 8.6295 14.2868 8.9375 14.6663 8.9375H16.7288V15.5833C16.7288 17.226 15.3923 18.5625 13.7497 18.5625H13.4252C13.1254 17.5056 12.151 16.7292 10.9997 16.7292C9.84834 16.7292 8.87393 17.5056 8.57418 18.5625H8.24967C6.60701 18.5625 5.27051 17.226 5.27051 15.5833V8.9375H7.33301C7.71251 8.9375 8.02051 8.6295 8.02051 8.25C8.02051 7.8705 7.71251 7.5625 7.33301 7.5625H5.27051V6.41667C5.27051 4.774 6.60701 3.4375 8.24967 3.4375H8.57418C8.87393 4.49442 9.84834 5.27083 10.9997 5.27083C12.151 5.27083 13.1254 4.49442 13.4252 3.4375ZM10.083 7.5625H11.9163C12.2958 7.5625 12.6038 7.8705 12.6038 8.25C12.6038 8.6295 12.2958 8.9375 11.9163 8.9375H10.083C9.70351 8.9375 9.39551 8.6295 9.39551 8.25C9.39551 7.8705 9.70351 7.5625 10.083 7.5625Z" />
        </svg>
      ),
    },
    {
      label: "Packs",
      href: "/dashboard/client/packs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path d="M17.248 4.31701L13.2165 2.52575C11.8278 1.90884 10.1722 1.90884 8.78347 2.52575L4.75202 4.31701C3.09285 5.05401 2.0625 6.55177 2.0625 8.2256V13.7715C2.0625 15.4453 3.09285 16.9422 4.75202 17.6801L8.78442 19.4713C9.47192 19.7766 10.2254 19.9296 10.9789 19.9323C10.9862 19.9323 10.9927 19.9369 11 19.9369C11.0073 19.9369 11.0138 19.9333 11.0211 19.9323C11.7746 19.9296 12.5281 19.7766 13.2156 19.4713L17.248 17.6801C18.9071 16.9431 19.9375 15.4453 19.9375 13.7715V8.2256C19.9375 6.55177 18.9071 5.05401 17.248 4.31701ZM9.34173 3.78348C9.86148 3.55248 10.4307 3.43783 11 3.43783C11.5693 3.43783 12.1394 3.55248 12.6583 3.78348L16.6897 5.57463C16.9611 5.69471 17.2049 5.84501 17.424 6.01551L15.1232 7.03859L8.56807 4.12634L9.34173 3.78348ZM5.30933 5.57374L6.8741 4.87885L13.4292 7.7911L12.1009 8.38147C11.4391 8.67481 10.5573 8.67572 9.89635 8.38147L4.57416 6.01551C4.79507 5.84409 5.03891 5.69474 5.30933 5.57374ZM5.31028 16.4225C4.15528 15.9091 3.4375 14.8935 3.4375 13.7706V8.22471C3.4375 7.83879 3.52733 7.46841 3.68591 7.12374L9.33899 9.63641C9.64241 9.77116 9.97333 9.85453 10.3125 9.91045V18.4886C9.97883 18.4327 9.6516 18.3502 9.34268 18.2127L5.31028 16.4225ZM18.5625 13.7715C18.5625 14.8935 17.8447 15.91 16.6897 16.4233L12.6573 18.2145C12.3493 18.3511 12.0212 18.4345 11.6875 18.4895V9.91134C12.0267 9.85543 12.3576 9.77295 12.661 9.6382L18.3141 7.12565C18.4718 7.47031 18.5625 7.84058 18.5625 8.2265V13.7715Z" />
        </svg>
      ),
    },
    {
      label: "Mon entreprise",
      href: "/dashboard/client/my-company",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path d="M19.4223 8.02293C18.3187 4.87418 15.5824 2.62568 12.2797 2.15177C11.4519 2.03352 10.549 2.03352 9.72034 2.15177C6.4185 2.62477 3.68134 4.87424 2.58042 8.01566C2.23667 8.96533 2.0625 9.96908 2.0625 10.9994C2.0625 12.0297 2.23668 13.0334 2.57768 13.9767C3.68134 17.1254 6.41759 19.374 9.72034 19.848C10.1374 19.9066 10.5683 19.9369 11 19.9369C11.4318 19.9369 11.8617 19.9066 12.2797 19.8471C15.5815 19.3741 18.3187 17.1246 19.4196 13.9832C19.7633 13.0335 19.9375 12.0297 19.9375 10.9994C19.9375 9.96908 19.7633 8.96618 19.4223 8.02293ZM17.732 7.5637H14.9426C14.6566 6.29137 14.2211 5.06943 13.6198 3.91718C15.3963 4.57076 16.8694 5.85779 17.732 7.5637ZM18.5625 11.0003C18.5625 11.7071 18.4608 12.3973 18.2683 13.0637H15.1947C15.2891 12.3799 15.3542 11.6915 15.3542 11.0003C15.3542 10.3082 15.29 9.61979 15.1956 8.9387H18.2692C18.4607 9.60237 18.5625 10.2926 18.5625 11.0003ZM8.19316 13.0637C8.08866 12.3817 8.02083 11.6924 8.02083 11.0003C8.02083 10.3101 8.08866 9.62162 8.19316 8.9387H13.8077C13.9113 9.61979 13.9792 10.3082 13.9792 11.0003C13.9792 11.6915 13.9113 12.3808 13.8068 13.0637H8.19316ZM3.73174 13.0637C3.54015 12.3991 3.4375 11.708 3.4375 11.0003C3.4375 10.2945 3.53924 9.60512 3.73174 8.9387H6.80534C6.71093 9.6207 6.64583 10.3091 6.64583 11.0003C6.64583 11.6924 6.71093 12.3817 6.80534 13.0637H3.73174ZM11.7782 3.49186C12.5867 4.75227 13.1716 6.1181 13.5309 7.5646H8.46814C8.82748 6.12085 9.41142 4.75511 10.2218 3.49286C10.4784 3.4672 10.7342 3.4387 11 3.4387C11.2658 3.43779 11.5216 3.46619 11.7782 3.49186ZM8.37924 3.91819C7.77699 5.07135 7.34158 6.2941 7.0565 7.5646H4.26801C5.12967 5.85868 6.60183 4.57177 8.37924 3.91819ZM4.2689 14.4387H7.05739C7.34339 15.7101 7.77883 16.9311 8.37924 18.0824C6.60366 17.4288 5.1324 16.1446 4.2689 14.4387ZM10.2218 18.5088C9.41325 17.2483 8.82935 15.8843 8.4691 14.4396H13.5309C13.1716 15.8824 12.5876 17.2474 11.7791 18.5088C11.2631 18.5601 10.7369 18.5601 10.2218 18.5088ZM13.6208 18.0824C14.2221 16.9302 14.6575 15.7092 14.9426 14.4387H17.7311C16.8694 16.1428 15.3973 17.4288 13.6208 18.0824Z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={cn(
        " xl:border-r overflow-y-scroll border-light-gray  h-full left-0 top-0 bottom-0 w-full xl:px-5 py-5  min-h-screen"
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
            <h4 className="text-sm text-gray-550 font-medium">Nom du compte</h4>
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
          {DATA.map((item, i) => (
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
  );
};

export default Sidebar;
