import HeaderAccount from "../../../ui/HeaderAccount";

function DashboardHeader() {
  return (
    <div className="flex w-full items-center justify-end border-b-2 p-4 text-gray-600 shadow-md">
     
      <div className="mr-9">
        <HeaderAccount />
      </div>
    </div>
  );
}

export default DashboardHeader;
