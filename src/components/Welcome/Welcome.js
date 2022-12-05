import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Welcome.css"
import image from "../../images/111.svg";
import {Link} from "react-router-dom";

function Welcome() {
  return (<>
      <Navbar/>
    <div className='welcome-container'>
        <div className='left'>
            <h1>Welcome to LMS Portal</h1>
            <Link to="/login"><button className='btn'>Login</button></Link>
            <Link to="/signup"><button className='btn'>SignUp</button></Link>
        </div>
        <div className='right'>
            <img className='welcome-image' src={image} alt=""/>
        </div>
        
    </div>
   </>
  )
}

export default Welcome