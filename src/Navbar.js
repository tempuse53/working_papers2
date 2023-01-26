// import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/App">Articles</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


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
      <nav ref={navRef}>
        <a href="/">Working Papers</a>
        <a href="/About">About</a>
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