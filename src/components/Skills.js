import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import './Skills.css';

export default function Skills(){
  return(
    <section id="skills">
        <div className="skContainer">
	        <div className="text">
	            <ChipIcon className="chipicon"/>
	            <h1 className="sk_h1">
	                Skills &amp; Technologies
	            </h1> 
	            <p className = "skPara">
	                Discover my diverse range of skills across programming languages, frameworks, databases, and tools.
	            </p>
	        </div>
	        <div className="skillmap">
	            {skills.map((skill) => (
	                <div key={skill} className="smalldiv">
	                    <div className="skillbox">
		                    <BadgeCheckIcon className="badgeicon"/>
		                    <span className="skSpan">
		                        {skill}
		                    </span>
	                    </div>
	                </div>
	            ))}
	        </div>
        </div>
    </section>
  );
}