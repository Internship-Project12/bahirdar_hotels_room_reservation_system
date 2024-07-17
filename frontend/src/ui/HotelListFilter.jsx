/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Search from "./Search";
import { useNavigate, useSearchParams } from "react-router-dom";

function HotelListFilter({ children, isLoading }) {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchHandler = handleSubmit((data) => {
    if (!data?.search) {
      return navigate("/hotels");
    }

    searchParams.set("search", data.search);
    setSearchParams(searchParams);
  });

  return (
    <div className="space-y-5 border-r-2 bg-blue-100 p-2">
      <Search
        onSearchHandler={onSearchHandler}
        register={register}
        isLoading={isLoading}
      />
      <div>{children}</div>
    </div>
  );
}

export default HotelListFilter;
