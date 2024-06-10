function SummarySection() {
  return (
    <div>
      <label>
        Summary
        <input
          type="text"
          defaultValue="5-star hotel located in the heart of Addis Ababa, Ethiopia"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel summary"
          required
        />
      </label>
      <label>
        Description
        <textarea
          rows={5}
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel description"
          defaultValue="Addis International Hotel is a 5-star hotel located in the heart of Addis Ababa, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa."
          required
        ></textarea>
      </label>
    </div>
  );
}

export default SummarySection;
