/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useSearchParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

function NavBar() {
  const [text, setText] = useState('');
  const [search, setSearch] = useSearchParams();

  const changeSearchParams = () => {
    if (text !== search.getTitle) {
      setSearch({ title: text });
    }
  };
  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="left-side">
          <i className="logo fa-thin fa-w" />
          <Link to="/" className="brand">WebFlix</Link>
        </div>
        <div className="search-bar">
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="search-field" />
          <i onKeyDown={changeSearchParams} className="search fa-solid fa-magnifying-glass" />
        </div>
        <div className="right-side">
          <ul className="menu">
            <li>About</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
