import React from 'react'
import {Element} from "react-scroll";
import Resume from "../resume-folder/final-resume.pdf"

function RightNav() {
  return (
    <div className = "rightnav fadein-right fadein-bottom">
      <Element name = "about" className = "about-me rightnav-elements">
        <h3 className = "sticky-top"> About Me</h3>
        <p>
          Welcome to my website! I am glad to have you here! I made this website with the hopes of sharing a bit about myself 
          and to showcase the different skills and experiences I have accumulated as a graduate with a major in Electrical Engineering 
          and Computer Sciences (EECS) from the University of California, Berkeley. 
        </p>
        <p>
          I was born and raised in San Diego, California and a quick little fun fact about myself is that I was born on Mexican Independence Day! 
        </p>
        <p>
          Outside of academics and my technical background, I am deeply passionate about music and am self-taught in guitar via youtube 
          tutorials. As of recently, I also started to work out and have begun trying to explore as many hiking trails as possible in my 
          native hometown of San Diego! 
        </p>
        <p>
          Please feel free to take a look around and also be sure to scroll to the bottom where you can write a personalized message 
          that will get delivered straight to my email! 
        </p>
      </Element>
      <Element name = "exp" className = "experience rightnav-elements">
        <h3 className = "sticky-top" > Experience </h3>
        <div className = "exp-container first-con" onClick={() => window.open('https://cs61c.org/sp24/', '_blank')}>
          <div className = "date-exp">
            <p> Jan. 2023 - May 2024 </p>
          </div>
          <div className = "content-exp">
            <h4> &mdash; University of California, Berkeley &#x2197;</h4>
            <h5> &bull; Computer Architecture Student Instructor &bull;</h5>
            <p> 
              Instructed a discussion section for 40+ students. Helped prepare lectures and worksheets, held office hours, and offered 
              support to 700+ students in the course entitled CS61C: Great Ideas of Computer Architecture (Machine Structures) offered at 
              the University of California, Berkeley. Course material included: machine architecture, principles & logic of digital systems, 
              operating systems, CPU design, RISC-V, and C. 
            </p>
          </div>
        </div>
        <div className = "exp-container" onClick={() => window.open('https://www.modalai.com/', '_blank')}>
          <div className = "date-exp">
            <p> May 2023 - Aug. 2023 </p>
          </div>
          <div className = "content-exp">
            <h4> &mdash; ModalAI &#x2197;</h4>
            <h5> &bull; Software Engineering Intern &bull;</h5>
            <p> 
              Worked on VOXL Portal, a web user interface that allows for camera inspection and debugging tools and hosted on VOXL, ModalAI's 
              fully autonomous computing platform. Gained valuable experience with tools such as Mongoose, an embedded network server and network library 
              written in C/C++, and Websockets, a tool in Javascript that allows for bi-directional communication between a browser and server. 
            </p>
          </div>
        </div>
        <div className = "exp-container" onClick={() => window.open('https://inst.eecs.berkeley.edu/~cs61c/fa22/', '_blank')}>
          <div className = "date-exp">
            <p> Aug. 2023 - Dec. 2023 </p>
          </div>
          <div className = "content-exp">
            <h4> &mdash; University of California, Berkeley &#x2197;</h4>
            <h5> &bull; Computer Architecture Tutor &bull;</h5>
            <p> 
              Instructed a weekly tutoring section of 5+ students and held office hours. Responsibilities also included preparing mini-lectures and worksheets 
              that would aid students in exploring the course material more thoroughly and through a variety of learning modalities. 
            </p>
          </div>
        </div>
      </Element>
      <Element name = "projs" className = "projects rightnav-elements">
        <h3 className = "sticky-top" > Projects </h3>
        <div className = "proj-container first-con">
          <div className = "date-exp">
            <p> May 2024 </p>
          </div>
          <div className = "content-exp">
            <h4> &bull; Personal Portfolio &bull; </h4>
            <p>
              Created a new personal portfolio website to showcase all the projects I have embarked on and all the experiences I have accumulated throughout 
              the past few years. This project was built using React.js, HTML5, and CSS and is hosted on Netlify. Special thanks to Brittany Chaing and 
              their website (https://brittanychiang.com/) for inspiration on this project! 
            </p>
          </div>
        </div>
        <div className = "proj-container" onClick={() => window.open('https://cal-cs184-student.github.io/hw-webpages-sp24-AXM78251/hw3/docs/index.html', '_blank')}>
          <div className = "date-exp">
            <p> Spring 2024 </p>
          </div>
          <div className = "content-exp">
            <h4> &bull; Path Tracer &#x2197; </h4>
            <p>
              Implemented a physically-based renderer, on the CPU, using a pathtracing algorithm. Renderer relies on ray-scene intersections, 
              acceleration structures like bounding volume hierarchy (BVH), and physically based lighting and material models. 
            </p>
          </div>
        </div>
        <div className = "proj-container" onClick={() => window.open('https://anthony-salinas-suarez.netlify.app/', '_blank')}>
          <div className = "date-exp">
            <p> August 2023 </p>
          </div>
          <div className = "content-exp">
            <h4> &bull; Old Personal Portfolio &#x2197; </h4>
            <p>
              First iteration of my personal website that was also built with React.js, HTML5, and CSS. 
            </p>
          </div>
        </div>
        <div className = "proj-container" onClick={() => window.open('https://inst.eecs.berkeley.edu/~cs162/fa23/static/proj/pintos-docs/', '_blank')}>
          <div className = "date-exp">
            <p> Fall 2023 </p>
          </div>
          <div className = "content-exp">
            <h4> &bull; PintOS &#x2197; </h4>
            <p>
              Led development of an x86 OS in C with a team of four. Designed user program interactions, priority scheduler,
              synchronization, and multithreading. Created an inode-based file system with buffer cache, supporting extensible files and
              subdirectories. Optimized file system for efficient reads and writes.
            </p>
          </div>
        </div>
        <div className = "proj-container" onClick={() => window.open('https://docs.google.com/document/d/1NXqEPG0rr9f2mRSYgvSkcOAcQjKoA5DtJ7p4fSOoZa0/edit?usp=sharing', '_blank')}>
          <div className = "date-exp">
            <p> Fall 2022 </p>
          </div>
          <div className = "content-exp">
            <h4> &bull; Cryptographic File System &#x2197; </h4>
            <p>
              Developed a google drive cryptographic file system in Golang. Key features: user authentication,
              multiple user sessions, file storing, editing, loading, sharing, and revocation. Utilized cryptographic functions when storing
              information on the server side database in order to preserve secrecy in communications between clients, and allow any malicious
              behavior to be detected. Implemented efficient algorithms for inserting and fetching files.
            </p>
          </div>
        </div>
      </Element>
      <Element name = "resu" className = "resume rightnav-elements">
        <h3 className = "sticky-top" > Resume </h3>
        <div className = "resume-container" onClick={() => window.open(Resume, '_blank')}>
          <p>
            Click here to view my resume! 
          </p> 
        </div>
      </Element>
      <Element name = "contact" className = "contacts rightnav-elements">
        <h3 className = "sticky-top"> Contact Me </h3>
        <p>
          Fill out this form if you'd like to send me an email or if you'd prefer, then please visit one of my other available social media platforms! 
        </p>
        <div className = "contact-container">
          <form action = "https://api.web3forms.com/submit" method = "POST" className = "form-content">

            <input type = "hidden" name = "access_key" value = "e75c5120-0c6a-48ea-84e5-0ee5181117c5"/>

            <label for = "name-imp"> Name </label>
            <input type = "text" name = "name" placeholder = "Your Name" class = "con-inps" required = {true} id = "name-imp"></input>

            <label for = "email-inp"> Email </label>
            <input type = "email" name = "email" placeholder = "Your Email" class = "con-inps" required = {true} id = "email-imp"></input>

            <label for = "msg-inp"> Message </label>
            <textarea name = "message" placeholder = "Your Message" class = "con-inps" required = {true} id = "msg-inp"></textarea>
            <button type = "submit"> Send </button>
          </form>
        </div>
      </Element>
      <div className = "parting-thoughts">
        <p className = "parting-thoughts"> 
          This website was built using React.js, HTML5, and CSS. Massive thanks to Brittany Chiang and their website, 
          https://brittanychiang.com for the inspiration on this website. 
        </p>
      </div>
    </div>
  )
}

export default RightNav
