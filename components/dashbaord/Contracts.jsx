import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Contracts = () => {
  const DATA = [
    {
      user_profile: {
        name: "John Doe",
        avatar: "/assets/images/imgpsh_fullsize_anim (11) 1.png",
      },
      supplier_name: "Fournisseur  1",
      supplier_logo: "/assets/images/—Pngtree—coffee_3626459 1.png",
      date: "19/11/2023",
      status: "Actif",
      default: "Non",
    },
    {
      user_profile: {
        name: "John Doe",
        avatar: "/assets/images/imgpsh_fullsize_anim (11) 1.png",
      },
      supplier_name: "Fournisseur  1",
      supplier_logo: "/assets/images/—Pngtree—coffee_3626459 1.png",
      date: "19/11/2023",
      status: "Actif",
      default: "Non",
    },
    {
      user_profile: {
        name: "John Doe",
        avatar: "/assets/images/imgpsh_fullsize_anim (11) 1.png",
      },
      supplier_name: "Fournisseur  1",
      supplier_logo: "/assets/images/—Pngtree—coffee_3626459 1.png",
      date: "19/11/2023",
      status: "Actif",
      default: "Non",
    },
    {
      user_profile: {
        name: "John Doe",
        avatar: "/assets/images/imgpsh_fullsize_anim (11) 1.png",
      },
      supplier_name: "Fournisseur  1",
      supplier_logo: "/assets/images/—Pngtree—coffee_3626459 1.png",
      date: "19/11/2023",
      status: "Actif",
      default: "Non",
    },
  ];
  return (
    <div className=" bg-white  w-full rounded-12 p-4 shadow-shadow-1">
      <div>
        <h5 className=" text-heading-5">Contrats</h5>
        <p className="text-sm text-gray-md">Liste des contrats</p>
      </div>
      <Table className="w-full min-w-max table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Nom de l’emmeteur
            </TableHead>
            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Nom du fournisseur
            </TableHead>
            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Logo
            </TableHead>

            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Date
            </TableHead>
            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Statut
            </TableHead>
            <TableHead className="text-sm font-semibold text-gray-medium-blue-grey">
              Défaut
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DATA.map((data, index) => (
            <TableRow className="h-[71px]" key={index}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={data.user_profile.avatar} />
                    <AvatarFallback>
                      {data.user_profile.name.split(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-semibold text-foreground">
                    {data.user_profile.name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-sm text-gray-medium-blue-grey">
                {data.supplier_name}
              </TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src={data.supplier_logo} />
                </Avatar>
              </TableCell>
              <TableCell className="text-sm">{data.date}</TableCell>
              <TableCell>
                <Badge variant={"progress"}>Actif</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={"open"}>Actif</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Contracts;
