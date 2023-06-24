import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import './Projects.css';

export default function Projects(){
    return(
        <section id="projects">
            <div className="projContainer">
                <div className="projSubcont">
                    <CodeIcon className="codeicon" />
                    <h1>
                        My Projects
                    </h1>
                    <p id="proj_p">
                        Dive into a dynamic collection of my projects for more information!
                    </p>
                </div>
                <div className="boxes">
                    { projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image} 
                            className="link"
                            >

                            <div className="imagebox">
                                <img
                                    alt = "gallery"
                                    className="pImg"
                                    src={project.image}
                                />
                                <div className="intros">
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="p_h1">
                                        {project.title}
                                    </h1>
                                    <p id="projDesc" >
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}