import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
    return (
        <>
            <header className="home">


                <nav className="navbar navbar-expand-lg navbar-light bg-light w3-pink">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Vanesa Gonzalez</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">Portfolio </ Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</ Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
            {/* 
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link classNameName="navbar-brand" to="/">
    //     Vanesa Gonzalez
    //   </Link>


    //   <div>
    //     <ul classNameName="navbar-nav">

    //       <li classNameName="nav-item">
    //         <Link
    //           to="/"
    //           classNameName={
    //             window.location.pathname === "/" || window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About
    //         </Link>
    //       </li>

    //       <li classNameName="nav-item">
    //         <Link
    //           to="/about"
    //           classNameName={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //         >
    //           About Me
    //         </Link>
    //       </li>





    //       <li classNameName="nav-item">
    //         <Link
    //           to="/portfolio"
    //           classNameName={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //         >
    //           Portfolio
    //         </Link>
    //         </li>




    //       <li classNameName="nav-item">
    //         <Link
    //           to="/contact"
    //           classNameName={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} >
    //          Contact     
    //         </Link>      
    //       </li>

    //     </ul>
    //   </div>
    // </nav> */}
        </>


    );
}

export default Navbar;