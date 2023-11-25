"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Validation schema using Yup
const schema = yup.object().shape({
  subject: yup.string().required("Sujet est requis"),
  severity: yup.string().required("Niveau de Gravité est requis"),
  description: yup.string().required("Description est requise"),
});

const overviewData = [
  {
    title: "Total des tickets",
    count: 8,
    bgColor: "hsla(201, 100%, 95%, 1)",
    textColoe: "hsla(224, 100%, 68%, 1)",
  },
  {
    title: "Ticket en attente",
    count: 2,
    bgColor: "hsla(38, 93%, 95%, 1)",
    textColoe: "hsla(38, 100%, 56%, 1)",
  },
  {
    title: "Tickets ouverts",
    count: 2,
    bgColor: "hsla(168, 100%, 95%, 1)",
    textColoe: "hsla(169, 85%, 47%, 1)",
  },
  {
    title: "Tickets fermés",
    count: 4,
    bgColor: "hsla(14, 100%, 97%, 1)",
    textColoe: "hsla(13, 93%, 70%, 1)",
  },
];

const ClientCreateTicket = () => {
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
    <div className="space-y-5 xl:space-y-8">
      {/* mask */}
      <div className=" h-[121px] bg-light-info rounded-[12px] flex items-center px-2 sm:px-5 relative overflow-hidden">
        <h2 className=" text-heading-1 text-slate-info">Créer Ticket</h2>
        <Image
          width={168}
          height={165}
          quality={100}
          src={"/assets/images/product-review .png"}
          alt="detail de ticket"
          className="absolute  left-[82%]"
        />
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {overviewData.map((data, index) => (
          <div
            className="flex  rounded-[8px]  items-center justify-center flex-col gap-2 h-[120px]"
            key={index}
            style={{
              background: `${data.bgColor}`,
            }}
          >
            <h2
              className="text-heading-3"
              style={{ color: `${data.textColoe}` }}
            >
              {data.count}
            </h2>
            <p className="text-base" style={{ color: `${data.textColoe}` }}>
              {data.title}
            </p>
          </div>
        ))}
      </div>
      <div>
        <div className="shadow-shadow-1 bg-white rounded-t-[8px] flex items-center p-3 md:p-5">
          <h3 className="text-heading-5">Créer un ticket</h3>
        </div>
        <div className="shadow-shadow-1 mb-10 w-full  bg-white rounded-t-[8px] flex items-center p-3 md:p-5">
          <form className="space-y-7 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label>Sujet</Label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full"
                    placeholder="Entrez votre sujet"
                    {...field}
                  />
                )}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}
            </div>
            <div className="space-y-2 w-full">
              <Label>Niveau de Gravité</Label>
              <Controller
                name="severity"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className=" w-full sm:w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.severity && (
                <span className="text-red-500">{errors.severity.message}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea className="w-full h-[96px]" {...field} />
                )}
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <Button type="submit" variant="secondary">
              Créer un ticket
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientCreateTicket;
