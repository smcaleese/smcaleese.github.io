import React from 'react'
import './Projects.scss'

export default function AppProject(props) {
    return (
        <div className="app-project">
            <div className="app-project-description-box center">
                <div className="app-project-description">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p>{props.technologies}</p>
                    <p>{props.date}</p>
                </div>
                <div className="app-buttons-container">
                    <a href={props.liveLink}>
                        <button type="button" className="btn btn-primary">play store listing</button>
                    </a>
                    <a href={props.repoLink}>
                        <button type="button" className="btn btn-danger">GitHub</button>
                    </a>
                </div>
            </div>
            <figure className="app-images-container center">
                <a href={props.img1}>
                    <img src={props.img1} alt="" />
                </a>
                <a href={props.img2}>
                    <img src={props.img2} alt="" />
                </a>
                <a href={props.img3}>
                    <img src={props.img3} alt="" />
                </a>
            </figure>
        </div>
    )
}