import React, { useEffect, useState } from "react";
import "./FaqComponent.css";
const FaqItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);
  const handleToggle=()=>{
    setIsShow(!isShow)
  }
  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);
  return (
    <div>
      <div className="faq-question-answer">
        <div className="question">
         <div>{faq.question}</div>
          <button className={`arrow-button ${isShow ? "rotate" : ""}`}  onClick={handleToggle}></button>
        </div>
        <div className="answer">
         {isShow && <div>{faq.answer}</div>}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
