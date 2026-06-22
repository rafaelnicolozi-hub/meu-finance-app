import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-4">   
        <NavLink to="/"
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
        }
        >
        Inicio</NavLink>
        <NavLink to="/sobre" className={({ isActive }) =>
          isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
        }>
        Sobre</NavLink> 
        </nav>
            ); 
}

export default Navbar; 
