import React from 'react';
import Page from '../../components/Page';
import Project from '../../components/Project';

export default function Portfolio() {
  const projects = [
    {
      slug: 'project1',
      title: 'Project 1',
      description: 'Something something something',
      url: '',
      repo: '',
    },
    {
      slug: 'project2',
      title: 'Project 2',
      description: 'Something something something',
      url: '',
      repo: '',
    },
    {
      slug: 'project3',
      title: 'Project 3',
      description: 'Something something something',
      url: '',
      repo: '',
    },
    {
      slug: 'project4',
      title: 'Project 4',
      description: 'Something something something',
      url: '',
      repo: '',
    },
  ];

  return (
    <Page title="Portfolio">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Project project={project} key={project.slug} />
        ))}
      </ul>
    </Page>
  );
}
