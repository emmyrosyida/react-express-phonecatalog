import { useState } from "react";
import { Button } from "react-bootstrap";
import { Trash2 } from "react-bootstrap-icons";
import ServiceGet from "../utils/ServiceGet";
import Modals from "../components/Modals";
import { toast } from "react-toastify";

const ButtonDelete = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteData = async () => {
    let res = await ServiceGet(
      `${window.location.origin}/api/phone/delete/${id}`
    );
    console.log(res);

    if (res.length > 0) {
      window.location.replace("/");
      toast.success("Yes! Phone deleted.");
    } else toast.error("Error! Please try again.");

    handleClose();
  };

  return (
    <>
      <Modals
        show={show}
        hide={handleClose}
        title="Delete Phone"
        body="Are you sure to delete?"
        click={deleteData}
        text="Confirm"
      ></Modals>
      <Button className="m-2" variant="danger" onClick={handleShow}>
        <Trash2
          color="white"
          className="mr-2"
          size={20}
          style={{ marginBottom: "3px" }}
        />
        Delete
      </Button>
    </>
  );
};

export default ButtonDelete;
