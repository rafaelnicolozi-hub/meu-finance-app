import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-4">   
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link> 
        </nav>
    ); 
}

export default Navbar; 
