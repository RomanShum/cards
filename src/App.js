import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./components/img/img.png";

function App() {
  const arr1 = {
    img: img,
    title: "Card title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: "Go somewhere",
    alt: "alt",
    href: "#",
  };

  const arr2 = {
    title: "Card title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: "Go somewhere",
    alt: "alt",
    href: "#",
  };

  return (
    <div>
      <Card {...arr1} />
      <Card {...arr2} />
    </div>
  );
}

export default App;
