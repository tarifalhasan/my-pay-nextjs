import Mask from "@/components/dashbaord/Mask";
import ChangeImage from "@/components/dashbaord/customers info/ChangeImage";
import ChangePassword from "@/components/dashbaord/customers info/ChangePassword";
import ClientBusiness from "@/components/dashbaord/customers info/ClientsBusiness";
import CustomersInformation from "@/components/dashbaord/customers info/CustomersInformation";
import ListOfInvoices from "@/components/dashbaord/customers info/ListOfInVoice";

const CustomersInfo = () => {
  return (
    <div className="space-y-5 mb-5 xl:space-y-8">
      <Mask title={"Informations du client"} />
      <div className="grid xl:grid-cols-2 gap-6">
        <ChangeImage />
        <ChangePassword />
      </div>
      <CustomersInformation />
      <ClientBusiness />
      <ListOfInvoices />
    </div>
  );
};

export default CustomersInfo;
