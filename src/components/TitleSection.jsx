import React from "react";
import Navbar from "./Navbar";
import rightArrow from '../assets/images/rightArrow.svg'


const TitleSection = () => {
  return (
    <section className="titleSection">
      <Navbar />
      <div className="titleSection--container">
        <div className="titleSection--container__sub-container">
          <h1 className="titleHeavy">
            Driving Energy Solution: Unleashing Excellence in Drilling and
            Beyond
          </h1>

          <p className="paragraphNormal">
            With more than 1,000 wells drilled worldwide and over 65 years of
            experience, we take pride in our innovative technological solution,
            the team of expertise, operational proficiency, cutting-edge
            equipment, understanding, and exceeding our clients’ expectations in
            the energy space.
          </p>

          <button className="paragraphNormal">
            <p>Connect with Us Today</p>
            <img src={rightArrow} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
