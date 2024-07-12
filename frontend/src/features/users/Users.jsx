/* eslint-disable react/prop-types */
import Table from "../../ui/table/Table";

function Users({ headers, users }) {
  return (
    <div>
      <div className="flex justify-between p-3">
        <h2>All Users </h2>
        <p>filter/sort</p>
      </div>
      <Table headers={headers} data={users} />
    </div>
  );
}

export default Users;
