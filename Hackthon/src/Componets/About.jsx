
import "../Styles/about.css";
import turtleImage from "../assets/images/Turtle.png"; // Replace with the path to your image

const AboutSection = () => {

  
  return (
    <div className="about-container">
      <div className="about-content">
        <img className=" about-image" id="turtle" src={turtleImage} alt="Turtle"  />
        <div className="about-text">
          <h2 className="text-right text-white" >ABOUT</h2>
          <p>
            Get ready to witness <strong>GHRhack 1.0</strong>, our college's flagship event that brings together the
            brightest minds from across the nation for an exhilarating innovation marathon. This is your chance to be
            part of something extraordinary, where creativity meets technology, and ideas transform into impactful
            solutions. Let's make <strong>GHRhack 1.0</strong> an unforgettable milestone of innovation and teamwork!
            Join the organizing team and help drive this remarkable event to success.
          </p>
        </div>
      </div>
    </div>
  );
};



export default AboutSection;
