import React, {useState} from 'react'
import { Link} from "react-scroll";
import gradShoot from "../images/grad-shoot.jpg"

function LeftNav() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className = "leftnav">
        <div className = "name leftnav-child">
            <h1> Anthony Salinas Suarez </h1>
            <img src = {gradShoot} className = "profile-photo"/>
            <h3> Software Engineer </h3>
        </div>
        <div className = "redirections leftnav-child">
          <ul>
            <li>
              <Link className = "link" activeClass = "active" to="section1" spy = {true} smooth={true} offset = {0} duration={750}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className = "social-media leftnav-child">
            <h1> HELP 3</h1>
        </div>
    </div>
  )
}

export default LeftNav
