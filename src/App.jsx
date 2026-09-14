import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavRail from './components/layout/Sidebar';
import ThemeToggle from './components/common/ThemeToggle';
import Home from './pages/Home';
import Writing from './pages/Writing';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'solarized',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => current === 'solarized' ? 'paper' : 'solarized');
  };

  return (
    <BrowserRouter>
      <div className="layout">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <NavRail />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
