import { Image, Form } from "react-bootstrap";
import "./UserRow.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const UserRow = ({ name, email, status, access, img }) => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (access === "Owner") {
      setIsOwner(true);
    }
  }, [access]);

  const statusColumnStyle = { color: "green", fontWeight: "bolder" };
  const accessColumnStyle = { color: "gray", fontWeight: "bolder" };
  let statusColumnData = status;
  let accessColumnData = access;
  let iconColumnData =  <span className="material-symbols-outlined">lock</span>

  if (!isOwner) {
    accessColumnData = (
      <Form.Select>
        <option>Manager</option>
        <option>Read</option>
      </Form.Select>
    );

    statusColumnData = (
      <Form.Select>
        <option>Inactive</option>
        <option>Active</option>
      </Form.Select>
    );

    iconColumnData = <span className="material-symbols-outlined">
    delete
    </span>
  }

  return (
    <tr className="align-middle">
      {/* This contains namge, image and email */}
      <td>
        <div className="profile-container d-flex justify-content-start">
          <div className="img-container me-4">
            <Image src={img} roundedCircle />
          </div>
          <div className="userdata-container">
            <p className="name m-0">{name}</p>
            <p className="email m-0">{email}</p>
          </div>
        </div>
      </td>

      {/* Td for status */}
      <td style={status.length > 0 ? statusColumnStyle : undefined}>
        {statusColumnData}
      </td>

      {/* Td for access */}
      <td style={accessColumnStyle}>{accessColumnData}</td>

      {/* Lock / Dustbin icon */}
      <td style={{color: "gray"}}>
        {iconColumnData}
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  access: PropTypes.string,
  img: PropTypes.string,
};
export default UserRow;
