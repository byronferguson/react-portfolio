import React from 'react';

export default function PageHeader({ title }) {
  return (
    <header className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-mono text-3xl text-center md:text-left font-bold leading-tight text-gray-900 uppercase">
          {title}
        </h1>
      </div>
    </header>
  );
}
