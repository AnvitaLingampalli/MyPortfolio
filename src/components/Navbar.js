import {ArrowRightIcon, MenuIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import './Navbar.css';

export default function Navbar(){
    // function myFunction() {
    //     var x = document.getElementsById("theNav");
    //     if (x.className === "navContainer") {
    //       x.className += " responsive";
    //       console.log(x.className);
    //     } else {
    //       x.className = "navContainer";
    //       console.log("not working");
    //     }
    // }

    // useEffect(() => {
        const sections = document.querySelectorAll("section");
        console.log("sections = ", sections)
        const navLinks = document.querySelectorAll(".navButtons, .navName");
        console.log("links = ", navLinks)

        function activeSection(){
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3){
                    current = section.getAttribute("id");
                }
            });

            console.log("current", current)
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", activeSection);
        

    //     return () => {
    //         window.removeEventListener("scroll", changeActive);
    //     };
    // }, []);


    return(
        <header className="header">
            <nav className="navContainer" id="theNav">
                <div className="navLeft"> {/*navleft */}
                    {/* <a href="#about" className="me"> */}
                    <a href="#about" className="navName"> {/*className="navButtons"*/}
                    Anvita
                    </a>
                </div>
                {/* <div className="onlyB"> */}
                <div className="navRight">
                        <a href="#projects" className="navButtons">
                            My Past Work
                        </a>
                        <a href="#skills" className="navButtons">
                            Skills
                        </a>	
                        <a href="#contactpage" className="navButtons">
                        {/* // className="contactLink">  */}
                        Contact Me
                        {/* <ArrowRightIcon className="hireButton"/> */}
                        </a> 

                    {/* <nav className="menuNav">
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <MenuIcon className="menuicon"/>
                        </a>
                    </nav> */}
                </div>
            </nav>
        </header>
    );
}

// nav Container
//      navLeft
            //navAl
//      navRight
            //navButtons
            //navButtons
            //navButtons