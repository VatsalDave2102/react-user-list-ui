import { Table } from "react-bootstrap";
import "./UserTable.css";
import UserRow from "../user-row/UserRow";
import users from "../../DUMMY_DATA";

const UserTable = () => {
  return (
    <>
      <Table responsive borderless className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              name={user.name}
              email={user.email}
              access={user.access}
              status = {user.status}
              img = {user.img}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
