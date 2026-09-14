const ThemeToggle = ({ theme, onToggle }) => {
  const isSolarized = theme === 'solarized';
  const currentLabel = isSolarized ? 'solarized light' : 'paper light';
  const nextLabel = isSolarized ? 'paper light' : 'solarized light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextLabel}`}
      title={`Switch to ${nextLabel}`}
    >
      <span className="theme-toggle__marker" aria-hidden="true">&lt;&gt;</span>
      {currentLabel}
    </button>
  );
};

export default ThemeToggle;
