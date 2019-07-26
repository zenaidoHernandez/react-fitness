import React from 'react'
import buttomImg from '../images/add.png'
import {Link} from 'react-router-dom'
import './styles/addButton.css'

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt='imgButton'/>
    </Link>
); 

export default AddButton