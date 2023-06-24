import React from "react";
import './About.css';

export default function About(){
    return(
        <section id="about">
            <div className="container">
                <div className="hpb">
                    <h1>Hi, I am Anvita Lingampalli
                    <br/>Welcome to My Portfolio!
                    </h1>
                    <p>
                    I am a passionate programmer and developer specializing in backend development.
                    Explore my portfolio to see some of the projects I have worked on, showcasing my technical skills. 
                    </p>
                    <div className="twoButtons">
                        <a href="#contactpage" id="contact">
                           Contact Me
                        </a>
                        <a href="#projects" id="projectB">
                            My Projects
                        </a>
                    </div>
                </div>
                <div className="myImage">
                    <img className="mypic" alt="animated picture" src="./myPic.jpg"/>
                    
                </div>
            </div>

        </section>
    )
}

/* <a href="https://www.freepik.com/vectors/data-background">Data background vector created by starline - www.freepik.com</a> */