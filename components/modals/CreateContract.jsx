"use client";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Define validation schema
const schema = yup.object().shape({
  supplier: yup.string().required("Nom sur la carte est requis"),
  marchant_id: yup.string().required("Nom sur la carte est requis"),
});

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CreateContract = () => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" border-primary-blue text-primary-blue"
          variant="outline"
        >
          Contrat prioritaire
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter Carte Bleue</DialogTitle>
        </DialogHeader>
        <form
          className="flex px-5 relative items-center overflow-hidden   gap-7 flex-wrap xl:flex-nowrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="flex w-full items-center gap-7">
              <div className="w-full">
                <div className="space-y-1">
                  <Label>Fournisseur</Label>
                  <Controller
                    name="cardName"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Choisissez votre fournisseur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Saisissez l’Id merchant</Label>
                  <Controller
                    name="marchant_id"
                    control={control}
                    render={({ field }) => (
                      <Input
                        placeholder="XXXX - XXXX - XXXX - XXXX"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="py-4">
              <Button variant="secondary" type="submit">
                Ajouter Carte
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateContract;
