import React from 'react';

const Ruler = () => (
  <svg viewBox="0 0 72 30" style={{ width: '25%', 'z-index': '5' }}>
    <style>
      {
        '.ruler-line { fill:none; stroke:white; stroke-miterlimit:10; stroke-width:1px;}'
      }
    </style>
    <line className="ruler-line" y1={0} x2={72} y2={0} />
    <line className="ruler-line" x1={54} y1={0} x2={58.5} y2={0} />
    <line className="ruler-line" x1={58.5} y1={0} x2={63} y2={0} />
    <line className="ruler-line" x1={58.5} y1={4.34525} x2={58.5} y2={0.0004} />
    <line className="ruler-line" x1={67.5} y1={4.34525} x2={67.5} y2={0.0004} />
    <line className="ruler-line" x1={63} y1={9.0004} x2={63} y2={0.0004} />
    <line className="ruler-line" x1={72} y1={29.00039} x2={72} y2={0.00042} />
    <line className="ruler-line" x1={63} y1={0} x2={67.5} y2={0} />
    <line className="ruler-line" x1={67.5} y1={0} x2={72} y2={0} />
    <line className="ruler-line" x1={36} y1={0} x2={40.5} y2={0} />
    <line className="ruler-line" x1={40.5} y1={0} x2={45} y2={0} />
    <line className="ruler-line" x1={40.5} y1={4.34525} x2={40.5} y2={0.0004} />
    <line className="ruler-line" x1={49.5} y1={4.34525} x2={49.5} y2={0.0004} />
    <line className="ruler-line" x1={45} y1={9.0004} x2={45} y2={0.0004} />
    <line className="ruler-line" x1={54} y1={18.0004} x2={54} y2={0.0004} />
    <line className="ruler-line" x1={45} y1={0} x2={49.5} y2={0} />
    <line className="ruler-line" x1={49.5} y1={0} x2={54} y2={0} />
    <line className="ruler-line" x1={18} y1={0} x2={22.5} y2={0} />
    <line className="ruler-line" x1={22.5} y1={0} x2={27} y2={0} />
    <line className="ruler-line" x1={22.5} y1={4.34525} x2={22.5} y2={0.0004} />
    <line className="ruler-line" x1={31.5} y1={4.34525} x2={31.5} y2={0.0004} />
    <line className="ruler-line" x1={27} y1={9.0004} x2={27} y2={0.0004} />
    <line className="ruler-line" x1={36} y1={18.0004} x2={36} y2={0.0004} />
    <line className="ruler-line" x1={27} y1={0} x2={31.5} y2={0} />
    <line className="ruler-line" x1={31.5} y1={0} x2={36} y2={0} />
    <line className="ruler-line" y1={0} x2={4.5} y2={0} />
    <line className="ruler-line" x1={4.5} y1={0} x2={9} y2={0} />
    <line className="ruler-line" x1={4.5} y1={4.34525} x2={4.5} y2={0.0004} />
    <line className="ruler-line" x1={13.5} y1={4.34525} x2={13.5} y2={0.0004} />
    <line className="ruler-line" x1={9} y1={9.0004} x2={9} y2={0.0004} />
    <line className="ruler-line" x1={18} y1={18.0004} x2={18} y2={0.0004} />
    <line className="ruler-line" x1={9} y1={0} x2={13.5} y2={0} />
    <line className="ruler-line" x1={13.5} y1={0} x2={18} y2={0} />
  </svg>
);

export default Ruler;
