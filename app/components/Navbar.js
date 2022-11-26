import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
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
