import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
      </nav>
    </header>
  );
};

export default Header;
