import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
const FirstProject = (props) => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">PDAS</h1>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99" />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={CortanaImage}
                title="Cortana"
                handle="@cortana32"
              />
            </div>
            <div className="column is-4">
              <ProfileCard image={SiriImage} title="Siri" handle="@siri01" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstProject;
