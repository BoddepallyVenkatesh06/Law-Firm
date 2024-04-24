import React from "react";
import "./ChooseUs.css";
import giftImage from "../assests/Gift-img.svg";

const SuccessData = [
  {
    id: 1,
    image: giftImage,
    successRate: "98% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer.",
    btnText: "Read More",
  },
  {
    id: 2,
    image: giftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer.",
    btnText: "Read More",
  },
  {
    id: 3,
    image: giftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer.",
    btnText: "Read More",
  },
];

const ChooseUs = () => {
  return (
    <div className="choose-wrapper">
      <div className="heading-wrapper">
        <h1>Why Choose us?</h1>
      </div>
      <div className="box-wrapper">
        {SuccessData.map((each) => {
          const {id, image, successRate, description, btnText } = each;
          return (
            <div key={id}>
              <div className="box-container">
                <div className="img-wrapper">
                  <img src={image} alt="giftImage" />
                </div>
                <h4>{successRate}</h4>
                <p>{description}</p>
                <button className="read-button">{btnText}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
