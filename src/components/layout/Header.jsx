import './Header.css';
import '../global.css';
import useLiquidGlassHover from '../../hooks/useLiquidGlassHover';

const Header = () => {
  const navRef = useLiquidGlassHover();

  return (
    <header className="header">
      <nav ref={navRef} className="nav liquid-glass liquid-glass-rounded-xl">
        <div className="liquid-glass-specular"></div>
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
      </nav>
    </header>
  );
};

export default Header;
