import React from 'react'
import FatalErrorImg from '../images/500.png'
import '../components/styles/error.css'

const FatalError = () => (
    <div className="text-center">
        <h1 className="error_text">Error: 500 Unexpected error</h1>
        <img src={FatalErrorImg} alt="500 Unexpected Error" className="error_image"/>
    </div>
)

export default FatalError