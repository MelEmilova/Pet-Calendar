import CategotiesNav from './CategotiesNav/CategotiesNav';
import {useEffect, useState} from 'react';
import Pet from '../Pet/Pet'

function Categories(props) {

  const [pets, setPets] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9999/pets')
      .then(res => res.json())
      .then(data => setPets(data))
  }, []) 

  return (

    <section className="dashboard">
      <h1>Categories</h1>

      <CategotiesNav></CategotiesNav>

      <ul className="other-pets-list">

        {pets.map(pet => <Pet pet={pet} key={pet.id}></Pet>)}

      </ul>
    </section>
  );
}

export default Categories;