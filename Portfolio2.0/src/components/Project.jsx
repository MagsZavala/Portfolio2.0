import React from 'react';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <div>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;
