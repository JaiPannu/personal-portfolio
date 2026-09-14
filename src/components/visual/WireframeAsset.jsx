import cadBraille from '../../data/cadBraille';

const WireframeAsset = ({ type = 'robot', className = '', ascii = '' }) => (
  <span
    className={`ascii-cad ${className}`}
    aria-hidden="true"
  >
    <span className="cad-state cad-state--braille">
      {cadBraille[type] || cadBraille.robot}
    </span>
    {ascii && <span className="cad-state cad-state--ascii">{ascii}</span>}
  </span>
);

export default WireframeAsset;
