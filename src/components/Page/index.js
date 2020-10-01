import React from 'react';
import PageHeader from '../PageHeader';

export default function Page({ children, title }) {
  return (
    <section className="mx-auto px-6 max-w-full md:max-w-6xl">
      <PageHeader title={title} />
      {children}
    </section>
  );
}
