"use client";
import globe from "@/public/assets/images/globe.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import CustomButton from "./CustomButton";
// Validation schema using Yup
// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Required field").default(""),
  first_name: yup.string().required("Required field").default(""),
  email: yup.string().required("Required field").default(""),
  company_name: yup.string().required("Required field").default(""),
  business_type: yup.string().required("Required field").default(""),
  siret: yup.string().required("Required field").default(""),
  turn_over: yup.string().required("Required field").default(""),
  country: yup.string().required("Required field").default(""),
  telephone: yup.string().required("Required field").default(""),
});

const InformationRequest = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      first_name: "",
      email: "",
      company_name: "",
      business_type: "",
      siret: "",
      turn_over: "",
      country: "",
      telephone: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className=" pt-8 relative !z-50 xl:pt-16 pb-7">
      <div className="container">
        <h2 className=" text-center text-[1.8rem] leading-normal tracking-tight sm:text-[2.5rem] xl:text-[2.9375rem] font-mediums">
          Demande d’information
        </h2>
        <form
          className=" pt-6 xl:pt-10 relative z-[9999] space-y-6 max-w-[805px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" grid lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">Nom</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="Entrez votre sujet"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Prenom
              </Label>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="Entrez votre sujet"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="email@example.com"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Nom de l’entreprise
              </Label>
              <Controller
                name="company_name"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="Le nom de votre entreprise"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Type de votre business
              </Label>
              <Controller
                name="business_type"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="type"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Siret
              </Label>
              <Controller
                name="siret"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="45637XXXXXXX"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Chiffre d’affaire
              </Label>
              <Controller
                name="turn_over"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="type"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Pays
              </Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="France"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className=" grid items-center lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white font-bold text-heading-5">
                Numéro de téléphone
              </Label>
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full rounded-[14px] h-[67px] input_dark focus:outline-none focus:ring-0   ring-0 border-none"
                    placeholder="(+33) 675 763 445"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="pt-6">
              <CustomButton title={"Envoyer"} type="submit" />
            </div>
          </div>
        </form>
      </div>
      <Image
        className=" z-10 hidden lg:block absolute left-0 top-[55%]"
        src={globe}
        alt="sdsd"
      />
    </section>
  );
};

export default InformationRequest;
