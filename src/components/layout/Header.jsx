import './Header.css';
import '../global.css';
import useLiquidGlassHover from '../../hooks/useLiquidGlassHover';

const Header = () => {
  const navRef = useLiquidGlassHover();

  return (
    <header className="header">
      <nav ref={navRef} className="nav liquid-glass liquid-glass-rounded-xl">
        <div className="liquid-glass-specular"></div>
        <a href="https://drive.google.com/drive/folders/1wc7mwEKchrYSepHtoDnb49AXKtsa_KbP?usp=sharing" target="_blank"className="nav-logo">My Resume</a>
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
