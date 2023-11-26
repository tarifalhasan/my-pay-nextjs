"use client";
import bankCardImg from "@/public/assets/images/—Pngtree—mbe style bank card icon_4035152 1.png";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Define validation schema
const schema = yup.object().shape({
  cardName: yup.string().required("Nom sur la carte est requis"),
  cardNumber: yup
    .string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Numéro de carte invalide")
    .required("Numéro de la carte est requis"),

  expirationDate: yup
    .string()
    .matches(/^\d{2}\/\d{2}$/, "Date d'expiration invalide")
    .required("Date d’expiration est requise"),
  cvc: yup.string().required("CCV est requis"),
});

const CreditCardForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic
    reset(); // Reset form after submission
  };

  return (
    <form
      className="flex items-center gap-7 flex-wrap xl:flex-nowrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="flex w-full items-center gap-7">
          <div className="w-full">
            <div className="space-y-1">
              <Label>Nom sur la carte</Label>
              <Controller
                name="cardName"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Entre le nom complet" {...field} />
                )}
              />
              {errors.cardName && (
                <span className="text-red-500">{errors.cardName.message}</span>
              )}
            </div>
            <div className="space-y-1">
              <Label>Numéro de la carte</Label>
              <Controller
                name="cardNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={
                      field.value
                        ? field.value
                            .replace(/[^\dA-Z]/g, "")
                            .replace(/(.{4})/g, "$1 ")
                            .trim()
                        : ""
                    }
                    onChange={(e) => {
                      const formattedValue = e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim();

                      field.onChange(formattedValue);
                    }}
                  />
                )}
              />

              {errors.cardNumber && (
                <span className="text-red-500">
                  {errors.cardNumber.message}
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="space-y-1">
              <Label>Date d’expiration</Label>
              <Controller
                name="expirationDate"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="MM/AA"
                    value={
                      field.value
                        ? field.value
                            .replace(/[^\dA-Z]/g, "")
                            .replace(/(.{2})/, "$1/")
                            .trim()
                        : ""
                    }
                    onChange={(e) => {
                      const formattedValue = e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .replace(/(.{2})/, "$1/")
                        .trim();
                      field.onChange(formattedValue);
                    }}
                  />
                )}
              />

              {errors.expirationDate && (
                <span className="text-red-500">
                  {errors.expirationDate.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label>CCV</Label>
              <Controller
                name="cvc"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="123"
                    value={
                      field.value
                        ? field.value.replace(/[^\dA-Z]/g, "").substring(0, 3)
                        : ""
                    }
                    onChange={(e) => {
                      const formattedValue = e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .substring(0, 3);
                      field.onChange(formattedValue);
                    }}
                  />
                )}
              />
              {errors.cvc && (
                <span className="text-red-500">{errors.cvc.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="py-4">
          <Button variant="secondary" type="submit">
            Ajouter Carte
          </Button>
        </div>
      </div>
      <div>
        <Image src={bankCardImg} alt="Image" className="max-w-[258px]" />
      </div>
    </form>
  );
};

export default CreditCardForm;
