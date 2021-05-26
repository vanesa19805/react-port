import React from "react"

function Contact() {
    return (
        <div className="container-contact" >
            <div className="row-linkedin-info">
                <div className="col s12 center" id="linkedin">
                    <a href="https://www.linkedin.com/in/vanesa-gonzalez-00b632168">
                        <span>
                            <i className="fab fa-linkedin" style={{ paddingRight: "50%", fontSize: "250%" }}>Click here to View my Linked in page</i>
                            <h3 style={{ fontSize: "500%", fontStyle: "italic", paddingInline: "50%" }}></h3>
                        </span>
                    </a>
                </div>
            </div>
            <div className="row-contact-info">
                <div className="col s12 center" id="email" >
                    <a href="mailto:gvane1919@gmail.com"><span
                        className="fa fa-envelope mt-4 fa-4x " style={{ paddingRight: "50%" }}></span></a>
                    <h3 style={{ fontSize: "75%", fontStyle: "italic", paddingRight: "50%" }}>Email:Vanesa Gonzalez</h3>
                </div>

            </div>
        </div>

    );



}

export default Contact;