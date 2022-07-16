import React from "react";

const Nav = () => {
  return (
    <nav className="h-16 flex justify-between px-20 items-center border-b border-gray-100 shadow-lg">
      <img src="/logo.svg" alt="Logo" width={80} />
      <button className="flex items-center gap-2">
        <a href="/products" className="font-bold text-zinc-800">
          Carrinho
        </a>
        <img src="/addcart.png" alt="Cart" width={24} />
      </button>
    </nav>
  );
};

export default Nav;
