import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-dark v">
        <div class="container-fluid" >
          <div>
          <a class="navbar-brand" href="#">
            <Link className="link" to="/">LMS</Link>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
        <div class="d-flex justify-content-end ">
          <div class="collapse navbar-collapse v1" id="navbarSupportedContent">
            <ul class="navbar-nav me-0 mb-2 mb-lg-0 " id="i1">
              <li class="nav-item v1">
                <Link className="link" to="/profile">Profile</Link>
              </li>
            
              <li class="nav-item dropdown ">
                <Link className="link" to="/courses">Courses</Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">MEAN Stack</a></li>
                  <li><a class="dropdown-item" href="#">MERN Stack</a></li>
                  <li class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Java Full Stack</a></li>
                </ul>
              </li>
              
              <li class="nav-item v1">
                <Link className="link" to="/feedback">Feedback</Link>
              </li>
              <li class="nav-item v1">
                <a class="nav-link" href="#">Logout</a>
              </li>
            </ul>
            
          </div>
        </div>




        </div>
      </nav>
      <div class="container">
        <div class="row">
          <table class="table table-bordered border-secondary wid  ">
            <tr>
              <td>Name</td>
              <td>rounded</td>
              <td rowspan="3">
                <img src="images/download.png" class="img-thumbnail" alt="..."/>
              </td>
            </tr>
            <tr>
              <td>Email-id</td>
              <td>rounded</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>rounded</td>
            </tr>
            <tr >
              <td>Phone No</td>
              <td colspan="2">rounded</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td colspan="2">rounded</td>
            </tr>
            <tr>
              <td >Year & Sem</td>
              <td colspan="2">rounded</td>
            </tr>
            <tr>
              <td >Attendance </td>
              <td colspan="2">rounded</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center mt-5 mb-2 h2">Circulars </h2>
          </div>
        </div>
        <div class="row justify-content-evenly pt-3 pb-3">
          <p class="h4 text-center text-muted">No Circulars Yet</p>
        </div>
        
        <div class="row bg-secondary text-center text-white p-2">
          <div class="col-12">
            <p>LMS Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
