import { useState } from 'react';
import { Link } from 'react-router-dom';
import WireframeAsset from '../visual/WireframeAsset';
import loadCadAscii from '../../data/loadCadAscii';
import './Hero.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1zpSg9ygdsdcZcUHEZ7FiEUxbSWNy_9HA/view?usp=sharing';

const Pill = ({ href, color = 'blue', children }) => {
  const className = `pill pill--${color}`;
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const CadLink = ({ className, type, href, label }) => {
  const [ascii, setAscii] = useState('');
  const internal = href.startsWith('/');
  const external = /^https?:\/\//.test(href);
  const LinkElement = internal ? Link : 'a';

  const prepareAscii = () => {
    if (ascii) return;
    loadCadAscii(type).then(setAscii);
  };

  return (
    <LinkElement
      className={`cad-floater ${className}`}
      {...(internal ? { to: href } : { href })}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={internal ? `Read ${label} post` : `View ${label} project`}
      onPointerEnter={prepareAscii}
      onFocus={prepareAscii}
      onTouchStart={prepareAscii}
    >
      <WireframeAsset type={type} ascii={ascii} />
      <span className="cad-link-label">{label} {internal ? '→' : '↗'}</span>
    </LinkElement>
  );
};

const Intro = () => {
  return (
    <section className="about" id="top">
      <div className="about-cad">
        <p className="cad-hint" aria-hidden="true">
          <span className="cad-hint-copy cad-hint-copy--desktop">click a sketch to explore</span>
          <span className="cad-hint-copy cad-hint-copy--mobile">tap a sketch to explore</span>
          <span className="cad-hint-arrow">↗</span>
        </p>
        <svg
          className="cad-web"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M55 106L220 78L430 142L650 62L892 125" />
          <path d="M104 518L265 408L430 142L510 545L748 442L924 532" />
          <path d="M220 78L265 408L510 545L650 62L748 442L892 125" />
          <path className="cad-web__dash" d="M55 106L104 518M430 142L748 442M650 62L924 532" />

          <g className="cad-web__tethers">
            <path className="cad-tether--mobile-hidden" d="M20 66L55 106" />
            <path d="M970 78L892 125" />
            <path className="cad-tether--mobile-hidden" d="M18 305L116 350L265 408" />
            <path d="M982 298L856 365L748 442" />
            <path d="M24 537L104 518" />
            <path className="cad-tether--mobile-hidden" d="M978 560L924 532" />
            <path
              className="cad-tether--mobile-hidden cad-tether--formula"
              d="M430 520L510 545"
            />
          </g>

          {[
            [55, 106], [220, 78], [430, 142], [650, 62], [892, 125],
            [104, 518], [265, 408], [510, 545], [748, 442], [924, 532],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
          ))}
        </svg>
        <CadLink
          className="cad-floater--arm"
          type="robot"
          label="Humanoid Elbow"
          href="https://www.watonomous.ca/"
        />
        <CadLink
          className="cad-floater--satellite"
          type="satellite"
          label="AlbertaSat EPS"
          href="https://docs.google.com/document/d/1Vou69ljq1GUpFDrU6DHUNywJiyDAEIo5eQMKR5CtUi8/edit?tab=t.0"
        />
        <CadLink
          className="cad-floater--plant"
          type="ugv"
          label="Autonomous UGV"
          href="/writing/my-first-robotics-project"
        />
        <CadLink
          className="cad-floater--brain"
          type="terrain"
          label="Fighting Robot"
          href="#projects"
        />
        <CadLink
          className="cad-floater--terrain"
          type="brain"
          label="Voyager Controls"
          href="#projects"
        />
        <CadLink
          className="cad-floater--rover"
          type="plant"
          label="Kobe"
          href="https://drive.google.com/file/d/1j1a1bmIftkF-fkqGZZYZ3Wk0a-CInX16/view?usp=sharing"
        />
        <CadLink
          className="cad-floater--network"
          type="network"
          label="Formula Electric"
          href="#projects"
        />
      </div>

      <div className="about-socials">
        <a
          href="https://x.com/JaiPannu13"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
        </a>
        <a
          href="https://github.com/JaiPannu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5a11.5 11.5 0 0 0 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jai-pannu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
        <a href="mailto:js3pannu@uwaterloo.ca" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>

      <div className="about-body">
        <div className="about-text">
          <div className="about-head">
            <div>
              <p className="about-kicker">Mechatronics student &amp; habitual tinkerer</p>
              <h1 className="about-name">Jai Pannu</h1>
            </div>
            <a className="resume-btn" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              résumé ↗
            </a>
          </div>

          <p className="about-intro">
            I study Mechatronics Engineering at{' '}
            <Pill color="yellow" href="https://uwaterloo.ca">UWaterloo</Pill>. I work
            across robotics, controls/automation, and the mechanical bits
            that make software real.
          </p>

          <p className="about-lead">Here's my story:</p>

          <ul className="cool-list">
            <li>
              16 - global nominee at{' '}
              <Pill color="blue" href="https://awissa.notion.site/AWISSA-Addressing-Wildfire-Issues-in-the-Democratic-Republic-of-Congo-fa63271a8a754d35ad680ebaa2d27f3e">
                NASA SpaceApps
              </Pill>{' '}
              <span className="dim">— top 0.8% of 57,000+</span>
            </li>
            <li>
              17 - built CubeSat firmware at{' '}
              <Pill color="blue" href="https://albertasat.ca">AlbertaSat</Pill>{' '}
              for a <Pill color="purple" href="https://www.asc-csa.gc.ca/eng/">CSA</Pill> mission
            </li>
            <li>
              18 - grew my personal business, <Pill color="peach" href="https://jspcwebsolutions.cc">
                JSPC Web Solutions
              </Pill>{' '}
              to $150k
            </li>
            <p className="about-intro">
              Recently teaching machines at <Pill color="teal" href="https://www.afterquery.com/">AfterQuery (YC W25)</Pill> and now automating systems at{' '}
              <Pill color="teal" href="https://www.voyagercontrols.io/">Voyager Controls</Pill>
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
