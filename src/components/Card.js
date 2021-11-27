import CardItem from "./CardItem";
import CardWrapper from "./CardWrapper";
import { PropTypes } from "prop-types";

function Card(props) {
  const { img, alt } = props;
  return (
    <CardWrapper img={img} alt={alt}>
      <CardItem {...props} />
    </CardWrapper>
  );
}

Card.defaultProps = {
  img: "",
  alt: "alt",
};

Card.propTypes = {
  alt: PropTypes.string,
};

export default Card;
