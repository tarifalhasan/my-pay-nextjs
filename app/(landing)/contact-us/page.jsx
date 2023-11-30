"use client";
import LandingHeader from "@/components/landing/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import * as yup from "yup";

import CustomButton from "@/components/landing/CustomButton";
import { Label } from "@/components/ui/label";
const ContactUs = () => {
  ContactUs;
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
    firstName: yup.string().required("firstName is required"),
    lastName: yup.string().required("lastName is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data); // Replace with your submission logic
  };
  return (
    <div className="min-h-screen  w-full h-full bg-hero bg-no-repeat bg-cover">
      <LandingHeader />
      <div className="container pt-6">
        <div className=" login_container overflow-hidden flex lg:items-center  flex-col lg:flex-row i w-full   min-h-[696px]  p-4 gap-6">
          <div className=" basis-full lg:basis-1/2 w-full h-full">
            <div className="overflow-hidden  rounded-[30px] relative max-w-full lg:max-w-[80%] min-h-[670px] w-full space-y-16 h-full bg-login_bg py-5 px-7 bg-cover bg-no-repeat">
              <div className=" pt-[49px] space-y-[10px]">
                <h4 className="text-[1.4375rem] font-semibold text-white-50">
                  Informations
                </h4>

                <p className=" text-[#BCBCBC] text-xs font-medium max-w-[278px]">
                  Veuillez trouver ci-dessous nos informations de contact
                </p>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="w-[31px] h-[31px]" />
                <div className=" space-y-2">
                  <p className=" text-base font-medium text-white-50">
                    +33 017 797 176
                  </p>
                  <p className=" text-base font-medium text-white-50">
                    +33 017 797 176
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaRegEnvelope className="w-[31px] h-[31px]" />
                <p className=" text-base font-medium text-white-50">
                  Support@mypay.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="w-[31px] h-[31px]" />
                <p className=" text-base font-medium text-white-50">
                  Paris, France
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full r lg:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  pt-[32px] space-y-[32px]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className=" text-xs text-[#B0B0B0]">Votre nom</Label>
                  <input
                    className="text-foreground focus:outline-none block border-b border-gray-12"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label className=" text-xs text-[#B0B0B0]">Votre nom</Label>
                  <input
                    className="text-foreground focus:outline-none block border-b border-gray-12"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="">
                <Label className=" text-xs text-[#B0B0B0]">Votre Email</Label>
                <input
                  className="text-foreground focus:outline-none block border-b border-gray-12"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="">
                <Label className=" text-xs text-[#B0B0B0]">Message</Label>
                <textarea
                  className="text-foreground  w-full focus:outline-none block border-b border-gray-12"
                  {...register("message")}
                  cols={120}
                />
                {errors.me && (
                  <p className="text-red-500">{errors.me.message}</p>
                )}
              </div>
              <CustomButton type="submit" title={"ENVOYER"}>
                ENVOYER
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
