import React from "react";
import './Contact.css';

export default function Contact(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
    }

    function handleSubmit(e) {

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert("there is an error"));

          e.preventDefault();
    };

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
                                ASU <br />
                                Arizona, AZ 85281
                            </p>
                        </div>
                        <div className="personal">
                            <h2 className="infoHead">
                                EMAIL
                            </h2>
                            <a className="myEmail">
                                reedbarger@email.com
                            </a>
                            <h2 className="infoHead">
                                PHONE
                            </h2>
                            <p className="number">
                                0123-456-789
                            </p>
                        </div>
                    </div>                    
                </div>
                <form netlify name = "contact" className="contactform" onSubmit={handleSubmit}>
                    <h2 className="hire">
                        Hire Me
                    </h2>
                    <p className="hireP">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>

                    <div className="formDivs">
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input type="text" id="inp" name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="formDivs">
                        <label htmlFor="email" className="formLabel">
                            Email
                        </label>
                        <input type="email" id="inp" name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="formDivs">
                        <label htmlFor="message" className="formLabel">
                            Message
                        </label>
                        <textarea id="msgL" name="message"
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




