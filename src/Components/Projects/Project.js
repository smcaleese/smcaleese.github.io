import React, { useEffect } from 'react'

const Project = ({
  title,
  description,
  technologies,
  date,
  liveLink,
  repoLink,
  img,
}) => (
  <div className="project">
    <div className="project-description-box center">
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{technologies}</p>
        <p>{date}</p>
      </div>
      <div className="buttons-container">
        <a href={liveLink}>
          <button type="button" className="btn btn-primary">open live app</button>
        </a>
        <a href={repoLink}>
          <button type="button" className="btn btn-danger">GitHub</button>
        </a>
      </div>
    </div>
    <figure className="project-image-container center">
      <a href={img}>
        <img src={img} alt="" />
      </a>
    </figure>
  </div>
)

export default Project
