import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div className="topPage">
        <h1 className="brand">HeroGames</h1>
        <CartWidget/>
      </div>
      <div>
        
      </div>
    </nav>
  )
};

export default NavBar;
