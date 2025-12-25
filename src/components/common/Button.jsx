import './Button.css';

/**
 * Reusable Button Component
 * @param {string} variant - 'primary', 'secondary', or 'outline'
 * @param {string} size - 'small', 'medium', or 'large'
 * @param {function} onClick - Click handler function
 * @param {boolean} disabled - Whether button is disabled
 * @param {string} type - Button type (button, submit, reset)
 * @param {node} children - Button content
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  children
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
