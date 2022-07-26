import {ArrowRightIcon, MenuIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css';

export default function Navbar(){
    function myFunction() {
        var x = document.getElementsById("theNav");
        console.log("hi");
        if (x.className === "navContainer") {
          x.className += " responsive";
          console.log(x.className);
        } else {
          x.className = "navContainer";
          console.log("not working");
        }
    }

    return(
        <header className="header">
            <div className="navContainer" id="theNav">
                <a className="navLink" >
                    <a href="#about" className="me">
                    About Me
                    </a>
                </a>
                <div className="onlyB">
                    <nav className="nav">
                        <a href="#projects" className="navButtons">
                            My Past Work
                        </a>
                        <a href="#skills" className="navButtons">
                            Skills
                        </a>	  
                    </nav>
                    <a
                        href="#contactpage"
                        className="contactLink">
                        Hire Me
                        <ArrowRightIcon className="hireButton"/>
                    </a>

                    <nav className="menuNav">
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <MenuIcon className="menuicon"/>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}