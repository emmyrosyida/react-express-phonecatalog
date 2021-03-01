import Card from "../../node_modules/react-bootstrap/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic from "./phone12.jpg";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

const Cards = ({ title, url, click }) => {
  const CARD_CUSTOM = { display: "inline-block" };

  return (
    <>
      <style type="text/css">
        {`
        .card:hover{
          box-shadow: 8px 8px 8px #6886;
        }

      `}
      </style>
      <Card style={CARD_CUSTOM} className="m-2 cardc" onClick={click}>
        <LazyLoadImage
          alt={title}
          effect="blur"
          placeholderSrc={pic}
          height={300}
          src={`${window.location.origin}/images/` + url}
          width={170}
        />
        <Card.Body>
          <Card.Text className="text-center">{title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
