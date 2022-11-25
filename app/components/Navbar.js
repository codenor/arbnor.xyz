import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="title">
        Arbnor
      </a>
      <ul>
        <li>
          <Link href="/about">Blog</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
