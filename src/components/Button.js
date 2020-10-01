import React from 'react';

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-blue-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
