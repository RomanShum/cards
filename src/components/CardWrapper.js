import { PropTypes } from "prop-types";

function CardWrapper(props) {
  const { img, alt } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {Boolean(img) ? <img src={img} className="card-img-top" alt={alt} /> : ""}
      {props.children}
    </div>
  );
}

CardWrapper.defaultProps = {
  img: "",
  alt: "alt",
};

CardWrapper.propTypes = {
  alt: PropTypes.string,
};

export default CardWrapper;
