/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Search from "./Search";

function HotelListFilter({children}) {
  const { handleSubmit, register } = useForm();
  const onSearchHandler = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="space-y-5 border-r-2 bg-blue-100 p-2">
      <Search onSearchHandler={onSearchHandler} register={register} />
      <div>
        {children}
      </div>
    </div>
  );
}

export default HotelListFilter;
