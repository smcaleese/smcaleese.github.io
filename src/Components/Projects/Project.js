import React from 'react'

export default function Project(props) {
    return (
        <div className="project">
            <div className="project-description-box center">
                <div className="project-description">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p>{props.technologies}</p>
                    <p>{props.date}</p>
                </div>
                <div className="buttons-container">
                    <a href={props.liveLink}>
                        <button type="button" className="btn btn-primary">open live app</button>
                    </a>
                    <a href={props.repoLink}>
                        <button type="button" className="btn btn-danger">GitHub</button>
                    </a>
                </div>
            </div>
            <figure className="project-image-container center">
                <a href={props.img}>
                    <img src={props.img} alt="" />
                </a>
            </figure>
        </div>
    )
}