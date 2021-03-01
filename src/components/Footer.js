import React from "react";
import Container from "../../node_modules/react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <div className="footer-copyright text-center py-3 bg-primary">
        <Container fluid>
          <label className="text-white">
            {new Date().getFullYear()} Copyright &copy; emmyrosyida.me
          </label>
        </Container>
      </div>
    </>
  );
};

export default Footer;
