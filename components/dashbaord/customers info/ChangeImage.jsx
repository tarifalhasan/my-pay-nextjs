import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ChangeImage = () => {
  return (
    <div className=" shadow-shadow-1 p-4 rounded-12">
      <div className=" space-y-2">
        <h5 className=" text-heading-5">Changer image</h5>
        <p className="text-sm text-gray-medium-blue-grey">
          Changer l’image de votre profil
        </p>
      </div>
      <div className=" gap-y-5  pt-8 grid place-items-center">
        <Avatar className="w-[120px] h-[120px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Télécharger</Button>
          <Button className=" border-error text-error" variant="outline">
            Télécharger
          </Button>
        </div>
        <p className="text-center pb-3 text-sm text-gray-medium-blue-grey">
          Format JPG, GIF ou PNG. Max taille de 800Ko
        </p>
      </div>
    </div>
  );
};

export default ChangeImage;
