import { Routes, Route } from 'react-router-dom';

import Animal from './Animal.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
  
  return (
    <>
      <NavBar />
      <h1>Ace Ventura Pets</h1>

      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/adoption-pets" element={<Animal />} />
        {/* <Route path="/adoption-pets/bunny" element={<Animal animalName={"bunny"}/>} />
        <Route path="/adoption-pets/elephant" element={<Animal animalName={"elephant"}/>} /> */}
        <Route path="/adoption-pets/:name" element={<Animal />} />
        <Route path="/adoption-pets/:name/:animalType" element={<Animal />} />
      </Routes>
    </>
  )
}

export default App
