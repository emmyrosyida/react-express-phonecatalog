import Alert from "react-bootstrap/Alert";

const Alerts = ({ variant, text }) => {
  return (
    <>
      <Alert variant={variant}>{text}</Alert>
    </>
  );
};

export default Alerts;
