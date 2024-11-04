import { useParams, useNavigate } from "react-router-dom";

const Animal = () => {
  const { name, animalType } = useParams();
  // console.log(useParams());

  const navigate = useNavigate();
  
  const adoptAnimal = () => {
    console.log(`ADOPTING ANIMAL...`);
    // await fetch('API');

    navigate('/');
  }

  return (
    <>
      <h1>Adoption Animal</h1>

      {
        name ? <h2>Animal Picked: {name}</h2> : null
      }
      
      {
        animalType ? <h2>Animal Species: {animalType} </h2> : null
      }
      
      <button onClick={adoptAnimal}>Adopt Animal</button>
    </>
  )
}

export default Animal;