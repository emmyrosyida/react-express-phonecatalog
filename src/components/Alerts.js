import Alert from "../../node_modules/react-bootstrap/Alert";

const Alerts = ({ variant, text }) => {
  return (
    <>
      <Alert variant={variant}>{text}</Alert>
    </>
  );
};

export default Alerts;
