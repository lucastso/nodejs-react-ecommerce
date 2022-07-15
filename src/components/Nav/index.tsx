import React from "react";

const Nav = () => {
  return (
    <nav className="h-16 flex justify-between px-10 items-center bg-blue-100">
      <p>Ecom</p>
      <button>
        <a href="/products">Shop now</a>
      </button>
    </nav>
  );
};

export default Nav;
