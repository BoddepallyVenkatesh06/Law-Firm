import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ data }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggle = (index) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {data?.length
        ? data.map((each) => {
            const { id, question, answer } = each;
            return (
              <>
                <div key={id} className="accordion">
                  <div className="accordion-heading">
                    <h3>{question}</h3>
                    <div className="accordion-icon-wrapper">
                      <p onClick={() => toggle(id)} className="btn-icon">
                        {expandedQuestion === id ? "➖" : "➕"}
                      </p>
                    </div>
                  </div>
                  {expandedQuestion === id ? (
                    <div className="accordion-answer">
                      <p>{answer}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="hl"></div>
              </>
            );
          })
        : null}
    </>
  );
};

export default Accordion;
