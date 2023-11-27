"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Validation schema using Yup
const schema = yup.object().shape({
  current_password: yup.string().required("Password is required"),
  new_password: yup
    .string()
    .notOneOf(
      [yup.ref("current_password")],
      "New password must be different from the old password"
    )
    .required("New password is required")
    .min(8, "Password must be at least 8 characters"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("Please confirm your password"),
});

const ChangePassword = () => {
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
        <h5 className=" text-heading-5">Changer votre mot de passe</h5>
        <p className="text-sm text-gray-medium-blue-grey">
          Entrez puis confirmez votre nouveau mot de passe
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className=" pt-5 space-y-2">
          <Label>Mot de passe actuel</Label>
          <Controller
            name="current_password"
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
          {errors.current_password && (
            <span className="text-red-500">
              {errors.current_password.message}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <Label>Nouveau Mot de passe</Label>
          <Controller
            name="new_password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                className="w-full"
                placeholder="Enter your new password"
                {...field}
              />
            )}
          />
          {errors.new_password && (
            <span className="text-red-500">{errors.new_password.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label>Confirmer le mot de passe</Label>
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                className="w-full"
                placeholder="retype new password"
                {...field}
              />
            )}
          />
          {errors.confirm_password && (
            <span className="text-red-500">
              {errors.confirm_password.message}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <Button variant="secondary" type="submit">
            mise à jour
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
