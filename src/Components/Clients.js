import React from "react";
import "./Clients.css";
import client1 from "../assests/client1.svg";
import client2 from "../assests/client2.svg";
import client3 from "../assests/client3.svg";
import { ReactComponent as LeftArrow } from "../assests/leftArrow.svg";
import { ReactComponent as RightArrow } from "../assests/rightArrow.svg";

const clientData = [
  {
    id: 1,
    image: client1,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 2,
    image: client2,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 3,
    image: client3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
];
const Clients = () => {
  return (
    <div className="clients-wrapper">
      <div className="title">
        <h1>What says our happy Clients</h1>
        <div className="button-container">
          <button className="left-btn">
            <LeftArrow />
          </button>
          <button className="right-btn">
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="client-wrapper">
        {clientData.map((client) => {
          const {id, image, name, designation, description } = client;
          return (
            <div key={id} className="data-wrapper">
              <div className="img-Container">
                <img src={image} alt="client" />
              </div>
              <div className="client-title">
                <h4>{name}</h4>
                <p>{designation}</p>
              </div>
              <div className="client-description">
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
