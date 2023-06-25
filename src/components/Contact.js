import React from "react";
import './Contact.css';

export default function Contact(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
    }

    return (
        <section id="contactpage">
            <div className="c_container">
                <div className="subcCont">
                    <iframe className="iFrame"
                        width="100%"
                        height="100%"
                        title="map"
                        frameBorder = {0}
                        marginHeight = {0}
                        marginWidth = {0}
                        style ={{ filter: "opacity(0.7)" }}
                        src = "https://www.google.com/maps/embed/v1/place?q=arizona+state+university&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="infobox">
                        <div className="subinfo">
                            <h2 className="infoHead">
                                ADDRESS
                            </h2>
                            <p className="infoP">
                                Arizona State University <br />
                                Tempe, AZ 85281
                            </p>
                        </div>
                        <div className="personal">
                            <h2 className="infoHead">
                                EMAIL
                            </h2>
                            <a className="myEmail">
                                lingampallianvita01@gmail.com
                            </a>
                            <h2 className="infoHead">
                                PHONE
                            </h2>
                            <p className="number">
                                +1 (480) 749-0868
                            </p>
                        </div>
                    </div>                    
                </div>
                <form netlify 
                      name="contact" 
                      className="contactform" 
                      onSubmit={handleSubmit}
                >
                    <h2 className="hire">
                        Contact Me
                    </h2>
                    <p className="hireP">
                        Feel free to reach out and get in touch with me directly to discuss potential opportunities - I'm just a message away!
                    </p>

                    <input type="hidden" name="form-name" value="contact" />

                    <div className="formDivs">
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input type="text" id="name" name="name" className="inp"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="formDivs">
                        <label htmlFor="email" className="formLabel">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="inp"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="formDivs">
                        <label htmlFor="message" className="formLabel">
                            Message
                        </label>
                        <textarea id="message" name="message" className="inpL"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="subBut">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}




