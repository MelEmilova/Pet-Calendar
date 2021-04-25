import { Link } from 'react-router-dom';

function Pet(props) {
  return (
    <li className="otherPet">
      <h3>Name: {props.pet.name}</h3>
      <p>Category: {props.pet.category}</p>
      <p className="img"><img src={props.pet.imageURL} alt="animal"/></p>
      <p className="description">{props.pet.description}</p>
      <div className="pet-info">
        <Link to="/liked"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
        <Link to={`/${props.pet.id}`} id={props.pet.id}><button className="button">Details</button></Link>
        <i className="fas fa-heart"></i> <span> 2</span>
      </div>

    </li>
  );
};

export default Pet;