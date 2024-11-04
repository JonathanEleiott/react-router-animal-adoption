import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to='/'>Home Page</Link>
      <Link to='/adoption-pets'>Available Pets</Link>
      <Link to='/adoption-pets/Floofer'>Pet of the Month</Link>
      <Link to='/adoption-pets/Larry/Doggo'>Pet of the Year</Link>
    </>
  )
}

export default NavBar;