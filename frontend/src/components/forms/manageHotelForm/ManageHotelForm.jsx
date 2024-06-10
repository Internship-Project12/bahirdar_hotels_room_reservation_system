import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import SummarySection from "./SummarySection";

function ManageHotelForm() {
  return (
    <form className="m-auto flex max-w-[85%] flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg">
      <DetailSection />
      <SummarySection />
      <ImageSection />
      <button
        type="submit"
        className="w-full rounded bg-blue-800 px-3 py-2 text-white"
      >
        Add Hotel
      </button>
    </form>
  );
}

export default ManageHotelForm;
