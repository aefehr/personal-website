// src/components/Blob.js
import React from "react";

const Blob = ({ style, gradientId, colors, filter }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    style={style}
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </linearGradient>
      <filter id={filter}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 20 -10"
          result="blobby"
        />
        <feBlend in="SourceGraphic" in2="blobby" mode="normal" />
      </filter>
    </defs>
    <path
      d="M100,150 C120,50 280,50 300,150 C320,250 180,250 100,150 Z"
      fill={`url(#${gradientId})`}
      filter={`url(#${filter})`}
    />
  </svg>
);

export default Blob;

