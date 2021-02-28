import React from "react";
import { Container } from "react-bootstrap/";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonAdd from "./ButtonAdd";

const Layout = ({ body }) => {
  return (
    <>
      <Header title="Phone Catalog" endSlot={<ButtonAdd />} />
      <Container fluid className="container p-3">
        {body}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Layout;
