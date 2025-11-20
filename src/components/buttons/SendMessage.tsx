import React from 'react';
import styled from 'styled-components';
import { Send } from 'lucide-react';

interface SendButtonProps {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const SendButton = ({ isLoading = false, type = 'button', disabled = false }: SendButtonProps) => {
  return (
    <StyledWrapper>
      <div>
        <button
          type={type}
          disabled={disabled}
          className={`button ${disabled
            ? "shadow-[0_0_10px_#ff6b354f]"
            : "shadow-[0_0_10px_#ff6b35]"
          }`}
        >
          <Send className="button-icon" size={20} />

          {/* Highlight Stroke */}
          <svg className="highlight" viewBox="0 0 144.75738 77.18431" preserveAspectRatio="none">
            <g transform="translate(-171.52826,-126.11624)">
              <g fill="none" strokeWidth={17} strokeLinecap="round" strokeMiterlimit={10}>
                <path d="M180.02826,169.45123c0,0 12.65228,-25.55115 24.2441,-25.66863c6.39271,-0.06479 -5.89143,46.12943 4.90937,50.63857c10.22345,4.2681 24.14292,-52.38336 37.86455,-59.80493c3.31715,-1.79413 -5.35094,45.88889 -0.78872,58.34589c5.19371,14.18125 33.36934,-58.38221 36.43049,-56.91633c4.67078,2.23667 -0.06338,44.42744 5.22574,47.53647c6.04041,3.55065 19.87185,-20.77286 19.87185,-20.77286" />
              </g>
            </g>
          </svg>

          {isLoading ? "TRANSMITTING..." : "SEND MESSAGE"}
        </button>

        {/* Filters */}
        <svg height={0} width={0}>
          <filter id="handDrawnNoise">
            <feTurbulence numOctaves={8} baseFrequency="0.1" type="fractalNoise" />
            <feDisplacementMap scale={3} in="SourceGraphic" in2="noise" />
          </filter>

          <filter id="handDrawnNoise2">
            <feTurbulence numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" />
            <feDisplacementMap scale={3} in="SourceGraphic" in2="noise" />
          </filter>

          <filter id="handDrawnNoiset">
            <feTurbulence numOctaves={8} baseFrequency="0.1" type="fractalNoise" />
            <feDisplacementMap scale={6} in="SourceGraphic" in2="noise" />
          </filter>

          <filter id="handDrawnNoiset2">
            <feTurbulence numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" />
            <feDisplacementMap scale={6} in="SourceGraphic" in2="noise" />
          </filter>
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 100%;
    cursor: pointer;
    background: transparent;
    filter: url(#handDrawnNoise);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: 0.5rem;
    font-family: "Courier New", monospace;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    position: relative;
    animation: idle 1s infinite ease-in-out;
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Highlight stroke */
  .highlight {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    stroke: #00ff41;
    opacity: 0.5;
    stroke-width: 10;
    pointer-events: none;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }

  @keyframes idle {
    0% { filter: url(#handDrawnNoise); }
    50% { rotate: 2.5deg; filter: url(#handDrawnNoise2); }
    100% { filter: url(#handDrawnNoise); }
  }

  .button-icon {
    z-index: 1;
    transition: 0.3s;
  }

  .button:hover {
    rotate: -2.5deg;
    border-radius: 2rem;
    animation: hover 2.5s infinite ease-in-out;
  }

  .button:hover .highlight {
    stroke-dashoffset: 0;
  }

  .button:hover .button-icon {
    transform: rotate(-15deg) translateY(-2px);
  }

  .button:active {
    rotate: -2.5deg;
    box-shadow: inset #333 4px 4px 0 1px;
    animation: active 1s infinite ease-in-out;
  }

  .button:active .button-icon {
    transform: rotate(15deg) translateY(2px);
  }

  @keyframes hover {
    0% { rotate: 0deg; translate: 0 0; filter: url(#handDrawnNoise); }
    25% { rotate: -1deg; translate: 0 -2px; filter: url(#handDrawnNoise2); }
    50% { rotate: 0deg; translate: 0 2px; }
    75% { rotate: -1deg; translate: 0 -2px; filter: url(#handDrawnNoise2); }
    100% { rotate: 0deg; }
  }

  @keyframes active {
    0% { filter: url(#handDrawnNoiset); translate: 0 -1px; }
    50% { filter: url(#handDrawnNoiset2); translate: 0 1px; }
    100% { filter: url(#handDrawnNoiset); translate: 0 -1px; }
  }
`;

export default SendButton;
