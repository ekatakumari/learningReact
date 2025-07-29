import React, { useEffect, useState } from "react";
import "./FaqComponent.css";
const FaqItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);
  return (
    <div>
      <div className="faq-question-answer">
        <div className="question">
          <span>{index + 1}.</span>
          <div>{faq.question}</div>
          <button
            className={`arrow-button ${isShow ? "rotate" : ""}`}
            onClick={handleToggle}
          ></button>
        </div>
        {isShow && (
          <div className="answer">
            <img
              style={{ width: "20px", height: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg6AN9J3CbverblDw1pHq7vZpkaicPMQ_sg&s"
            />
            <div>{faq.answer}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
