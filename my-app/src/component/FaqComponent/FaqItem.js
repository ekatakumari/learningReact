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
          <span>{faq.question}</span>
          <button onClick={handleToggle}></button>
        </div>
        <div className="answer">
         {isShow && <span>{faq.answer}</span>}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
