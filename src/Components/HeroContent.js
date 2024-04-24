import React, { useState } from "react";
import "./HeroContent.css";
import messageIcon from '../assests/Message-icon.svg'
import heroImg from '../assests/hero-img.svg'

const HeroContent = () => {
    const [email, setEmail] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        if(!email) {
            alert("Please fill in the required field");
			return;
        } else {
            setEmail("");
        }
    }
    
    
  return (
    <div className="hero-content-wrapper">
      <div className="left-wrapper">
        <div className="header-text-wrapper">
          <h1> You don’t have to Fight them Alone.</h1>
        </div>
        <div className="description-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className="input-container">
          <img src={messageIcon} alt="messageBox" width={22} height={18}/>
          <input value={email} onChange={handleEmail} type="text" placeholder="Enter your Email Adress">
          </input>
          <div className="submit-button">
           <button onClick={handleSubmit}>Let's Talk</button>
          </div>
        </div>
      </div>
      <div className="hero-img">
          <img src={heroImg} alt="hero-img" className="img-container"/>
      </div>
    </div>
  );
};

export default HeroContent;
