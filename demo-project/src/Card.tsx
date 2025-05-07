import ProfileImage from "./assets/logo.png";
import "./index.css";

function Card() {
  return (
    <div className="card">
      <img className="Card-image" src={ProfileImage} alt="Profile Image"></img>
      <h2>Congratulations</h2>
      <p>you are ready to Rock the Show</p>
    </div>
  );
}

export default Card;
