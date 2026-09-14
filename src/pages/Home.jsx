import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Intro from '../components/layout/Hero';
import Projects from './Projects';
import Writing from './Writing';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      // let the sections mount first
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location]);

  return (
    <>
      <Intro />
      <Projects />
      <Writing preview />
    </>
  );
};

export default Home;
