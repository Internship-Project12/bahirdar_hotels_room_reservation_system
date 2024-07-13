function UserTableHeader() {
  return (
    <div className="mb-2 grid grid-cols-6 items-center gap-3 border-b border-slate-300 bg-slate-200 p-3">
      <div className="col-span-1 col-start-1">photo</div>
      <div className="col-span-1 col-start-2">firstName</div>
      <div className="col-span-1 col-start-3">lastName</div>
      <div className="col-span-1 col-start-4">email</div>
      <div className="col-span-1 col-start-5">phone number</div>
      <div className="col-span-1 col-start-6">role</div>
    </div>
  );
}

export default UserTableHeader;
