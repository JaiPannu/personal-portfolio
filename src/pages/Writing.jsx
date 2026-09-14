import { Link } from 'react-router-dom';
import posts from '../data/posts';
import './Writing.css';

const links = [
  { label: 'X', href: 'https://x.com/JaiPannu13' },
  { label: 'Email', href: 'mailto:js3pannu@uwaterloo.ca' },
  { label: 'GitHub', href: 'https://github.com/JaiPannu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jai-pannu' },
  {
    label: 'Résumé',
    href: 'https://drive.google.com/file/d/1zpSg9ygdsdcZcUHEZ7FiEUxbSWNy_9HA/view?usp=sharing',
  },
];

const PostList = () => {
  if (posts.length === 0) {
    return <p className="writing-empty">Nothing here yet — first note coming soon.</p>;
  }

  return (
    <ol className="writing-list">
      {posts.map((post) => (
        <li key={post.slug} className="writing-item">
          <div className="writing-item-heading">
            <Link to={`/writing/${post.slug}`} className="writing-title">
              {post.title}
            </Link>
            <time className="writing-date">({post.date})</time>
          </div>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ol>
  );
};

const Writing = ({ preview = false }) => {
  if (preview) {
    return (
      <section className="writing-preview" id="writing">
        <header className="simple-heading">
          <p className="eyebrow">notes from the workbench</p>
          <h2>Writing</h2>
        </header>
        <p className="writing-preview-copy">
          A quieter place for project notes, technical breakdowns, and ideas I want
          to think through in public.
        </p>
        <Link className="view-writing" to="/writing">View writing →</Link>
      </section>
    );
  }

  return (
    <article className="writing-page">
      <nav className="writing-nav" aria-label="Writing navigation">
        <Link to="/">Home</Link>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </nav>

      <header className="writing-intro">
        <h1>Jai Pannu</h1>
        <div>
          <p>
            I study Mechatronics Engineering at Waterloo and build across robotics,
            embedded systems, controls, and mechanical design.
          </p>
          <p>
            This is where I write about the details: what worked, what did not, and
            what I learned while making things real.
          </p>
        </div>
      </header>

      <section className="writing-index" aria-labelledby="writing-title">
        <h2 id="writing-title">Writing</h2>
        <PostList />
      </section>
    </article>
  );
};

export default Writing;
