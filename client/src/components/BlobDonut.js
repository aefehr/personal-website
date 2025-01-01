import React from "react";

const BlobDonut = ({ style, gradientId, colors }) => (
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
    </defs>
    <path
      d="M200,100 C300,50 400,200 300,300 C200,400 50,300 100,200 C50,100 100,50 200,100 Z"
      fill={`url(#${gradientId})`}
    />
  </svg>
);

export default BlobDonut;
