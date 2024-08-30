import React, { useState } from 'react';
import './Header.css';

const Header = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearchChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>MovieZone</h1>
      </div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={input}
        onChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
