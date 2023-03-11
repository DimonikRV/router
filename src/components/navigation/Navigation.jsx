import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation__item">
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
};

export default Navigation;
