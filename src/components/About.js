import React from "react";
import './About.css';

export default function About(){
    return(
        <section id="about">
            <div className="container">
                <div className="hpb">
                    <h1>Hi, I am Anvita
                    <br/>Welcome to my portfolio!
                    </h1>
                    <p>
                    I am a passionate programmer. I love coding, designing and building websites and web apps. 
                    </p>
                    <div className="twoButtons">
                        <a href="#contact" id="contact">
                           Contact Me
                        </a>
                        <a href="#projectB" id="projectB">
                            My projects
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