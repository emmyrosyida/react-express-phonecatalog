import { Breadcrumb } from "react-bootstrap";

const Breads = ({ name }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breads;
