"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const ReviewTicket = () => {
  return (
    <div className="space-y-5 xl:space-y-8">
      {/* mask */}
      <div className=" h-[121px] bg-light-info rounded-[12px] flex items-center px-2 sm:px-5 relative overflow-hidden">
        <h2 className=" text-heading-1 text-slate-info">Détail du Ticket</h2>
        <Image
          width={168}
          height={165}
          quality={100}
          src={"/assets/images/product-review .png"}
          alt="detail de ticket"
          className="absolute  left-[82%]"
        />
      </div>

      <div>
        <div className="shadow-shadow-1 bg-white rounded-t-[8px] flex items-center p-3 md:p-5">
          <h3 className="text-heading-5">Détail du Ticket</h3>
        </div>
        <div className="shadow-shadow-1 mb-10 w-full  space-y-7 bg-white rounded-t-[8px]  p-3 md:p-5">
          <ul className="flex max-w-[831px] flex-wrap w-full gap-10 justify-between items-center">
            <li>
              <div>
                <h4 className="text-sm font-medium">Sujet</h4>
                <h5 className="text-sm font-medium text-gray-md">
                  Sed ut perspiciatis unde omnis iste
                </h5>
              </div>
            </li>
            <li>
              <div>
                <h4 className="text-sm font-medium">Date du ticket</h4>
                <h5 className="text-sm font-medium text-gray-md">02-12-2021</h5>
              </div>
            </li>
            <li>
              <div>
                <h4 className="text-sm font-medium">Statut</h4>
                <Badge variant={"open"}>Ouvert</Badge>
              </div>
            </li>
          </ul>
          <div className=" max-w-[831px] w-full">
            <h4 className="text-sm font-medium">Description</h4>
            <div className=" space-y-4">
              <p className="text-sm font-medium text-gray-md">Bonjour,</p>
              <p className="text-sm font-medium text-gray-md">
                Je rencontre des difficultés pour me connecter à la plateforme
                depuis ce matin. Après avoir saisi mes identifiants, le
                chargement se fige et aucun accès n&apos;est possible. J&apos;ai
                essayé de vider le cache et d&apos;utiliser un navigateur
                différent, mais le problème persiste.
              </p>
              <p className="text-sm font-medium text-gray-md">
                Merci de bien vouloir examiner cette situation rapidement car
                l&apos;accès à la plateforme est crucial pour la réalisation de
                mes tâches quotidiennes.
              </p>
              <p className="text-sm font-medium text-gray-md">Cordialement</p>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <Label>Cordialement</Label>
              <Textarea className="h-[96px]" />
            </div>
            <div className="flex pt-5 pb-8 items-center gap-5 flex-wrap">
              <Button variant="secondary">Répondre au ticket</Button>
              <Button variant="destructive">Fermer le ticket</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTicket;
