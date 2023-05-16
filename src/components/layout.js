import React, { useState } from "react";
import "../styles/index.scss";

export default function Layout({ children }) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavClick = () => setIsNavVisible(!isNavVisible);
  return (
    <>
      <header>
        <a href="/">
          <h1>Dennis Calvert</h1>
        </a>
        <button className="mobileNavIcon" onClick={handleNavClick}>
          &mdash;
          <br /> &mdash; <br />
          &mdash;
        </button>
        <nav className={isNavVisible ? "active" : ""}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/">Photography</a>
          <a href="/music">Music</a>
          <a href="/books">Books</a>
          <a href="/video">Video</a>
        </nav>
      </header>

      <div>{children}</div>
      <footer>Social Links </footer>
    </>
  );
}
