import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Details(props) {
  const urlId = props.location.pathname
  const [pet, setPet] = useState([]);


  useEffect(() => {
    fetch('http://localhost:9999/pets'+urlId)
      .then(res => res.json())
      .then(data =>setPet(data));
  },[])

  return (

    <section class="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>Pet counter: 7 <Link to="#"><button class="button"><i class="fas fa-heart"></i>
        Pet</button></Link>
      </p>
      <p class="img"><img src={pet.imageURL} alt=""/></p>
      <p class="description">{pet.description}</p>
    </section>

  );
}

export default Details;