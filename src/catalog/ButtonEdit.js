import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import Alerts from "../components/Alerts";
import Modals from "../components/Modals";
import ServicePost from "../utils/ServicePost";
import FormPhone from "./FormPhone";
import { toast } from "react-toastify";

const ButtonEdit = ({ phone, handleSubmit }) => {
  const [show, setShow] = useState(false);
  const [edit, setState] = useState();

  useEffect(() => {
    setState(phone);
  }, [phone]);

  const handleState = (res) => {
    let { id, value } = res.target;
    setState((ele) => ({
      ...ele,
      [id]: value,
    }));
  };

  const handleClose = () => {
    setState(phone);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const editData = async () => {
    if (!Object.values(edit).every((x) => x === null || x === "")) {
      let res = await ServicePost(
        `${window.location.origin}/api/phone/edit`,
        edit
      );
      console.log(res);
      if (res.hasOwnProperty("id")) {
        toast.success("Yes! Phone edited.");
        handleSubmit(res);
      } else toast.error("Error!");
      handleClose();
    } else toast.error("Error! Please enter all fields.");
  };

  const form = <FormPhone handle={handleState} phone={edit} />;

  return (
    <>
      <Modals
        show={show}
        hide={handleClose}
        title="Edit Phone Form"
        body={form}
        click={editData}
        alert={
          <Alerts
            variant="warning"
            text="Attention! Image upload is not enabled."
          />
        }
        text="Submit"
      ></Modals>
      <Button className="m-2" variant="secondary" onClick={handleShow}>
        <PencilSquare
          className="mr-2"
          size={20}
          style={{ marginBottom: "3px" }}
        />
        Edit
      </Button>
    </>
  );
};

export default ButtonEdit;
