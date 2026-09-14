import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../data/posts';
import RoverHero from '../components/visual/RoverHero';
import './BlogPost.css';

const PostBlock = ({ block }) => {
  if (typeof block === 'string') return <p>{block}</p>;

  if (block.type === 'heading') return <h2 id={block.id}>{block.text}</h2>;

  if (block.type === 'frames') {
    return (
      <figure className="post-figure">
        <ol className="post-frames" aria-label="Coordinate frames, from parent to child">
          {block.items.map((frame) => (
            <li key={frame.name}>
              <code>{frame.name}</code>
              <span>{frame.description}</span>
            </li>
          ))}
        </ol>
        <figcaption>{block.caption}</figcaption>
      </figure>
    );
  }

  return (
    <p>
      {block.text}
      {block.source && <> <a href={block.source.href}>{block.source.label} ↗</a></>}
    </p>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${post?.title || 'Post not found'} — Jai Pannu`;
    return () => { document.title = previousTitle; };
  }, [post]);

  if (!post) {
    return (
      <article className="post">
        <Link to="/writing" className="post-back">← back</Link>
        <p className="eyebrow">404 / missing note</p>
        <h1 className="post-title">Post not found</h1>
        <p>That piece doesn&rsquo;t exist (yet).</p>
      </article>
    );
  }

  const content = post.content ?? [];
  const text = content.map((block) => typeof block === 'string' ? block : block.text || block.caption || '').join(' ');
  const readingMinutes = Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 230));

  return (
    <article className="post">
      <nav className="post-nav" aria-label="Article navigation">
        <Link to="/">Jai Pannu</Link>
        <Link to="/writing">Writing</Link>
      </nav>
      <header className="post-header">
        {post.hero === 'rover' ? <RoverHero title={post.title} /> : <h1 className="post-title">{post.title}</h1>}
        {post.excerpt && <p className="post-description">{post.excerpt}</p>}
        <div className="post-meta">
          <span>{post.author || 'Jai Pannu'}</span>
          <time dateTime={post.dateTime}>{post.date}</time>
          <span>{readingMinutes} min read</span>
        </div>
      </header>
      <div className="post-body">
        {content.map((block, index) => (
          <PostBlock key={block.id || index} block={block} />
        ))}
      </div>
      <footer className="post-footer">
        <Link to="/writing">← All writing</Link>
        <a href="mailto:js3pannu@uwaterloo.ca">Get in touch ↗</a>
      </footer>
    </article>
  );
};

export default BlogPost;
