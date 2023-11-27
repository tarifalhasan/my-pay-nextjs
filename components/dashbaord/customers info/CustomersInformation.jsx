"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  first_name: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  currency: yup.string().required("This field is required"),
  email: yup.string().required("This field is required"),
  phone: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
});

const CustomersInformation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    reset();
    router.push("/dashboard/client/create-ticket/review-ticket");
  };
  return (
    <div className=" shadow-shadow-1 p-4 rounded-12">
      <div className=" space-y-2">
        <h5 className=" text-heading-5">Informations du client</h5>
        <p className="text-sm text-gray-medium-blue-grey">
          Changer les informations ici
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>Nom</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  placeholder="Enter your old password"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label>Prénom</Label>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  placeholder="Enter your old password"
                  {...field}
                />
              )}
            />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name.message}</span>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>Nouveau Mot de passe</Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="msk">Moscow </SelectItem>
                      <SelectItem value="ist">India</SelectItem>
                      <SelectItem value="cst_china">China</SelectItem>
                      <SelectItem value="jst">Japan</SelectItem>
                      <SelectItem value="kst">Korea</SelectItem>
                      <SelectItem value="ist_indonesia">Indonesia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <span className="text-red-500">{errors.country.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label>Nouveau Mot de passe</Label>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="dollar">Dollar (USA) </SelectItem>
                      <SelectItem value="taka">Taka (BAN)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.currency && (
              <span className="text-red-500">{errors.currency.message}</span>
            )}
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  className="w-full"
                  placeholder="info@modernize.com"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label>Téléphone</Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  placeholder="+33 12345 65478"
                  {...field}
                />
              )}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Téléphone</Label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                className="w-full"
                placeholder="+33 12345 65478"
                {...field}
              />
            )}
          />
          {errors.address && (
            <span className="text-red-500">{errors.address.message}</span>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" type="submit">
            Confirmer
          </Button>
          <Button variant="destructive" type="button">
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomersInformation;
