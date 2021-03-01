import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import TableList from "./TableList";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import ServiceGet from "../utils/ServiceGet";
import Breads from "../components/Breads";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic from "../components/phone12.jpg";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

const Detail = ({ match }) => {
  const location = useLocation();
  const [state, setState] = useState({});
  const fetchData = async () => {
    let res = await ServiceGet(
      `${window.location.origin}/api/phone/${match.params.id}`
    );
    setState(res[0]);
  };

  const setData = (res) => {
    setState(res);
  };

  useEffect(() => {
    if (location.state === undefined) {
      fetchData();
    } else {
      setState(location.state[0]);
    }
    return () => {};
  }, []);

  const body = (
    <>
      <Breads name={state.name}></Breads>
      <Row>
        <Col className="text-right">
          <LazyLoadImage
            alt={state.name}
            src={`${window.location.origin}/images/` + state.imageFileName}
            effect="blur"
            placeholderSrc={pic}
          />
        </Col>
        <Col className="mt-2">
          <Row>
            <TableList phone={state} />
          </Row>
          <Row className="justify-content-center">
            <ButtonEdit handleSubmit={setData} phone={state} />
            <ButtonDelete id={state.id} />
          </Row>
        </Col>
      </Row>
    </>
  );
  return (
    <>
      <Layout body={body}></Layout>
    </>
  );
};

export default Detail;
