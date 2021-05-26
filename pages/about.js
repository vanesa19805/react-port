
import React from "react"


function About() {
    return (
        <>
            <title>Vanesa Gonzalez</title>

            <div className="card mb-3" style={{width: "100%"}}>
                <img className="vanesa" src="./assets/indeed .jpg" img alt="picture of Vanesa Gonzalez, the person on this about me page" style={{width: "50%"}} />
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text" style={{marginBottom:".05%"}}>Hello World! My Name, as you can tell from the title is Vanesa Gonzalez. Im currently 26 years old living in Wilmington Delaware. Im a Graduate of Wilmngton University with a BA in Business- Marketing. After graduating college in 2018 I joined a insurance group. I maganged to obtained my property, casulty life, health and disability producer licenses in the State of Delaware. Currently working on new skills that will hopefully lead to a more fruitful and creative carrer.</p>
                </div>
            </div>


            <div className="card-DT" style={{marginBottom: "10px"}}>
                <div className="card-body" >
                    <h5 className="card-title">Down Time</h5>
                    <p>When im not working or studying I enjoy the music scene in Philly and travel to Music festivals. I've really enjoy Traveling so when the line up is good i try to explore new festivals around the country. Some of festivals ive traveled to are:,</p>
                    <ul>
                        <li>Firefly music festival</li>
                        <li>Moonrise Music festival</li>
                        <li>Hijinx Music Festival</li>
                    </ul>
                </div>
            </div>
        </>


    );
}

export default About;