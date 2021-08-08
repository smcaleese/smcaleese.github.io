import React from 'react'
import Navigation from '../../Containers/Navigation/Navigation'
import resume from './resume-2021.pdf'
import './Resume.scss'

const Resume = () => (
    <>
        <Navigation />
        <div className="resume-header">
            <h1>Resume</h1>
            <a href={resume} download>
                <button type="button" className="btn btn-primary resume-button">
                    Click here to download my resume
                </button>
            </a>
        </div>
    </>
)

export default Resume