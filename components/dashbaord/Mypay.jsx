import { Copy, Smartphone } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Mypay = () => {
  return (
    <div className=" rounded-[12px] p-4   shadow-shadow-1">
      <h4 className=" text-heading-4 text-[#333B54]  pt-2 pb-5">MyPay</h4>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className=" w-[180px]">
                  <p className="text-sm font-semibold">Statut</p>
                </th>
                <th>
                  <p className="text-sm font-semibold">
                    Le site de l’entreprise
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Badge variant={"open"}>Actif</Badge>
                </td>
                <td>
                  <p className="text-sm font-medium text-gray-md">
                    www.mypay.fr/fr
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className=" w-[180px]">
                  <p className="text-sm font-semibold">Numéro de siret</p>
                </th>
                <th>
                  <p className="text-sm font-semibold">Domaine d’activités</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className=" inline-flex items-center gap-1">
                    <p className="text-sm font-medium text-gray-md">
                      12345678901234
                    </p>
                    <Copy className="  w-4 h-4 text-primary-blue" />
                  </div>
                </td>
                <td>
                  <p className="text-sm font-medium text-gray-md">
                    Technologie et Informatique
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          {/* address*/}
          <div className="space-y-4 pt-4 w-full xl:max-w-[342px]">
            <p className=" text-sm text-foreground font-semibold">Adresse</p>
            <div className="border  border-gray-medium-blue-grey px-4 py-4 rounded-[12px] space-y-6">
              <h5 className=" text-heading-5  font-medium">MyPay</h5>
              <p className="text-gray-medium-blue-grey text-sm">
                E601 Vrundavan Heights, godrej garden city - 382481
              </p>
              <div className=" inline-flex items-center gap-1">
                <Smartphone className=" w-6 h-6" />
                <p className="text-sm font-semibold">+33 6 123 456 35</p>
              </div>
              <div className="pb-4">
                <Button
                  className="border-primary-blue w-full text-primary-blue"
                  variant="outline"
                >
                  {" "}
                  Changer l’adresse
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" rounded-12 bg-white shadow-shadow-1 p-4 xl:p-6">
            <div>
              <h5 className="text-heading-5">Logo de l’entreprise</h5>
              <p className="text-sm  pt-2 text-gray-medium-blue-grey">
                Changer votre Logo
              </p>
            </div>
            <div className=" space-y-7 py-6    grid place-items-center">
              <div className=" w-32 h-32 bg-[#F6F6F6] rounded-full p-3  grid place-items-center">
                <Image
                  src={"/assets/images/react_logo.svg"}
                  alt="react_logo"
                  className=" animate-spin-slow  "
                  style={{ animationDelay: "2s" }}
                  width={71}
                  height={70.871}
                />
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Button className="h-[43px]" variant="secondary">
                  Télécharger
                </Button>
                <Button
                  className="h-[43px] border-error text-error"
                  variant="outline"
                >
                  Réinitialiser
                </Button>
              </div>
              <p className="text-sm text-center text-gray-medium-blue-grey">
                Format JPG, GIF ou PNG. Max taille de 800Ko
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypay;
