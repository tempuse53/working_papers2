
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="card-text fs-2 fw-bold" >Centralized Working Papers</h3>
       <nav>      
        <a href="https://tempuse53.github.io/working_papers2/">Working Papers</a>
        <a href="https://tempuse53.github.io/working_papers2/#/About/">About</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

