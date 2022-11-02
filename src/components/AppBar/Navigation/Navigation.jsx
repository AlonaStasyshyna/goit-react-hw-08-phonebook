import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="contacts" end>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
