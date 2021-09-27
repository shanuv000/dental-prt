import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="__cards">
      <img className="images" src={props.image} alt="imgs" />
      <h2 className="title">{props.title}</h2>
      <p className="blurb">{props.content}</p>
    </div>
  );
};
export default Cards;
