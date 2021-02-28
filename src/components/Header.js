import Navbar from "react-bootstrap/Navbar";

const NAV_CUSTOM = {
  paddingLeft: "1rem",
  marginBottom: "1rem",
};

const Header = ({ title, endSlot }) => {
  return (
    <>
      <Navbar variant="dark" bg="dark" style={NAV_CUSTOM}>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className={"d-inline-block align-top"}
          />
          <span className="pl-2">
            <label className="h4">{title}</label>
          </span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {endSlot}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
