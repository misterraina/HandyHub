// Header.js
import React from "react";

const Header = () => {
  const handleSearch = (e) => {
    // Handle search functionality here
    const searchTerm = e.target.value;
    console.log("Searching for:", searchTerm);
    // You can implement search logic using this searchTerm value
  };

  const handleSearchSubmit = () => {
    // Handle search submit button click
    // You can call the search functionality here if needed
    console.log("Search submitted");
  };

  return (
    <header className="header">
          <div className="header-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
