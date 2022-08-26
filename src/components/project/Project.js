import React from 'react'
import './ProjectStyles.css'

const Project = () => {
    return (
        <div className='project'>
            <div className="container">
                <div className="content">
                    <h2><span>Project </span> Data Science</h2>
                   <p> <a href='https://bit.ly/3dNiQKf'>Malaria Classification using Convolutional Neural Network</a>  </p>
                    <a href='https://bit.ly/3Asdgos'>Pneumonia Prediction using CNN Method</a>

                    <h2>Project <span> Front-End</span></h2>
                   <p> <a href='https://bit.ly/3KlPoY8'>Personal Website</a> </p>
                    <a href='https://bit.ly/3wzqTRo'>BMI Calculator</a>
                    {/* <div>
                        <button>Sign Up</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Project
