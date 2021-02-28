import { useHistory } from "react-router-dom";
import Cards from "../components/Cards";
import ServiceGet from "../utils/ServiceGet";
import { useEffect, useState } from "react";
import Layout from "./Layout";

const Catalog = () => {
  const history = useHistory();
  const [state, setstate] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await ServiceGet(`${window.location.origin}/api/phone`);
      setstate(res);
    };
    fetchData();
    return () => {};
  }, []);

  const body =
    Object.keys(state).length !== 0
      ? state.map((phone) => (
          <Cards
            key={phone.id}
            click={() =>
              history.push(
                `/details/${phone.id}`,
                state.filter((res) => res.id === phone.id)
              )
            }
            title={phone.name}
            url={phone.imageFileName}
          ></Cards>
        ))
      : "";
  return (
    <>
      <Layout body={body}></Layout>
    </>
  );
};

export default Catalog;
