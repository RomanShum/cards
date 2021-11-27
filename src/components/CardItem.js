import PropTypes from "prop-types";

function CardItem({ title, content, button, href }) {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      <a href={href} className="btn btn-primary">
        {button}
      </a>
    </div>
  );
}

CardItem.defaultProps = {
  title: "Card title",
  content:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  button: "Go somewhere",
  href: "#",
};

CardItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.string,
  href: PropTypes.string,
};

export default CardItem;
