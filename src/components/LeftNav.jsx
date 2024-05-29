import React, {useState} from 'react'
import { Link} from "react-scroll";
import gradShoot from "../images/grad-shoot.jpg"
import LinkedInLogo from "../images/LI-In-Bug.png"
import GithubLogo from "../images/github-mark-white.png"
import InstagramLogo from "../images/Instagram_Glyph_Gradient.png"

function LeftNav() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className = "leftnav fadein-left fadein-top">
        <div className = "name-title leftnav-child">
            <Link className = "link" activeClass = "active" to="about" spy = {true} smooth={true} offset = {0} duration={750}>
              <h1> Anthony Salinas Suarez </h1>
            </Link>
            <img src = {gradShoot} className = "profile-photo"/>
            <h3> Software Engineer </h3>
        </div>
        <div className = "redirections leftnav-child">
          <ul>
            <li>
              <Link className = "link" activeClass = "active" to="about" spy = {true} smooth={true} offset = {0} duration={750}>
                About Me
              </Link>
            </li>
            <li>
              <Link className = "link" activeClass = "active" to="exp" spy = {true} smooth={true} offset = {0} duration={750}>
                Experience
              </Link>
            </li>
            <li>
              <Link className = "link" activeClass = "active" to="projs" spy = {true} smooth={true} offset = {0} duration={750}>
                Projects
              </Link>
            </li>
            <li>
              <Link className = "link" activeClass = "active" to="resu" spy = {true} smooth={true} offset = {0} duration={750}>
                Resume
              </Link>
            </li>
            <li>
              <Link className = "link" activeClass = "active" to="contact" spy = {true} smooth={true} offset = {0} duration={750}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className = "social-media leftnav-child">
            <div className = "logos">
              <a href = "https://www.linkedin.com/in/anthony-salinas-suarez/" target = "_blank" rel="noopener noreferrer">
                <img src = {LinkedInLogo} alt = "Linked In Logo"/>
              </a>
            </div>
            <div className = "logos">
              <a href = "https://github.com/AXM78251" target = "_blank" rel="noopener noreferrer">
                <img src = {GithubLogo} alt = "Github Logo"/>
              </a>
            </div>
            <div className = "logos">
              <a href = "https://www.instagram.com/anthonyyy._.s/" target = "_blank" rel = "noopener noreferrer">
                <img src = {InstagramLogo} alt = "Instagram Logo"/>
              </a>
            </div>
        </div>
        <div className = "spotify-container">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3gkTnIG2dHkhcBCnxgcDc1?utm_source=generator&theme=0"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            className = "spotify-playlist"
          ></iframe>
        </div>
    </div>
  )
}

export default LeftNav
