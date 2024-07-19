import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: '/path/to/image1.jpg',
    deployedUrl: 'https://deployed-url.com',
    repoUrl: 'https://github.com/yourusername/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
