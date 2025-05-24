// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="">
      <NavLink to="/" className="">
        MyPortfolio
      </NavLink>
      
    </nav>
  );
}
