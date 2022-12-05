import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <Link className='link' to="/"><h2>LMS</h2></Link>
        </div>
        <div className='nav-right'>
            <ul>
                <li>
                    <Link  className='link' to="/profile">Profile</Link>
                </li>
                <li>
                <Link className='link' to="/courses">Courses</Link>
                </li>
                <li>
                <Link className='link' to="/feedback">Feedback</Link>
                </li>
                <li>
                
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar