"use client";
import LandingHeader from "@/components/landing/Header";
import loginAssets from "@/public/assets/images/login_assets.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
const SignUp = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    userName: yup.string().required("User name is required"),
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
      <LandingHeader showBackButton={true} />
      <div className="container pt-6">
        <div className=" login_container overflow-hidden flex i w-full   min-h-[696px]  p-4 gap-6">
          <div className=" hidden lg:block lg:basis-1/2 w-full h-full">
            <div className="overflow-hidden  rounded-[30px] relative max-w-[90%] min-h-[670px] w-full h-full bg-login_bg bg-cover bg-no-repeat">
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  className="object-cover max-w-[367px]"
                  src={loginAssets}
                  alt="Login"
                />
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className=" space-y-[12px]">
              <h2 className=" text-foreground text-heading-2 font-semibold">
                Bienvenue sur MyPay
              </h2>
              <p className=" text-foreground text-base">Votre admin panel</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  pt-[32px] space-y-[32px]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <button className=" border h-12 flex items-center justify-center rounded-[8px]  border-[#EAEFF4] bg-white text-sm font-semibold text-foreground  gap-x-2">
                  <FcGoogle className=" w-6 h-6" />
                  Connection Google
                </button>
                <button className=" border h-12 flex items-center justify-center rounded-[8px]  border-[#EAEFF4] bg-white text-sm font-semibold text-foreground  gap-x-2">
                  <FaFacebookF className=" w-6 h-6 text-primary-blue" />
                  Connection Facebook
                </button>
              </div>
              <div className="flex items-center gap-3  justify-between">
                <div className="h-[1px] bg-light-gray w-full"></div>
                <h6 className=" text-sm text-gray-md">ou </h6>
                <div className="h-[1px] bg-light-gray w-full"></div>
              </div>
              <div className=" space-y-2">
                <Label>Nom d’utilisateur</Label>
                <Input className="text-foreground" {...register("userName")} />
                {errors.userName && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className=" space-y-2">
                <Label>Email</Label>
                <Input className="text-foreground" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className=" space-y-2">
                <Label>Mot de passe</Label>
                <Input
                  className="text-foreground"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Button type="submit" variant="secondary" className="w-full h-12">
                Créer un compte
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
