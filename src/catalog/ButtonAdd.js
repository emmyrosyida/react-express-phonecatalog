import React from "react";
import Modals from "../components/Modals";
import { Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";
import ServicePost from "../utils/ServicePost";
import FormPhone from "./FormPhone";
import Alerts from "../components/Alerts";
import { toast } from "react-toastify";

const ButtonAdd = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: null,
    manufacturer: null,
    description: null,
    color: null,
    price: null,
    screen: null,
    processor: null,
    ram: null,
    imageFileName: null,
  });

  const handleState = (res) => {
    let { id, value } = res.target;
    setState((ele) => ({
      ...ele,
      [id]: value,
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addData = async () => {
    if (!Object.values(state).every((x) => x === null || x === "")) {
      let res = await ServicePost(
        `${window.location.origin}/api/phone/add`,
        state
      );
      console.log(res);
      if (res.length > 0) {
        window.location.replace("/");
        toast.success("Yes! Phone added.");
      } else toast.error("Error!");
      handleClose();
    } else toast.error("Error! Please enter all fields.");
  };

  const form = <FormPhone handle={handleState} phone="" />;

  return (
    <>
      <Modals
        show={show}
        hide={handleClose}
        title="Add New Phone Form"
        body={form}
        alert={
          <Alerts
            variant="warning"
            text="Attention! Image upload is not enabled."
          />
        }
        click={addData}
        text="Submit"
      ></Modals>
      <Button variant="dark" onClick={handleShow}>
        <PlusCircle
          color="white"
          className="mr-2"
          size={20}
          style={{ marginBottom: "3px" }}
        />
        Add Phone
      </Button>
    </>
  );
};

export default ButtonAdd;
