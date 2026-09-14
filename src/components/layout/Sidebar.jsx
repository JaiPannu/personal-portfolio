import { useLocation } from 'react-router-dom';
import './Sidebar.css';

const items = [
  { id: 'top', label: 'about' },
  { id: 'projects', label: 'work' },
  { id: 'writing', label: 'writing' },
];

const NavRail = () => {
  const location = useLocation();

  if (location.pathname !== '/') return null;

  const handleClick = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav-rail" aria-label="Main navigation">
      {items.map((item) => (
        <a
          key={item.id}
          href={`/#${item.id}`}
          className="nav-rail-link"
          onClick={handleClick(item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavRail;
