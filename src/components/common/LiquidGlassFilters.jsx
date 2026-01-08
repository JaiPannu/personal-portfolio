// SVG filters for liquid glass distortion effect
const LiquidGlassFilters = () => {
  return (
    <svg className="liquid-glass-svg-filters" aria-hidden="true">
      <defs>
        {/* Main glass distortion filter */}
        <filter id="liquid-glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.003"
            numOctaves="2"
            seed="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Smooth glass filter */}
        <filter id="liquid-glass-smooth">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1.2 0"
          />
        </filter>

        {/* Frosted glass effect */}
        <filter id="liquid-glass-frosted">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            result="noise"
          />
          <feDiffuseLighting
            in="noise"
            lighting-color="white"
            surfaceScale="2"
            result="diffLight"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite
            operator="in"
            in="diffLight"
            in2="SourceAlpha"
            result="comp"
          />
          <feBlend in="SourceGraphic" in2="comp" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
};

export default LiquidGlassFilters;
