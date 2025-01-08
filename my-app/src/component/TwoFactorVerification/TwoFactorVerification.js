import { useEffect, useRef, useState } from "react";
import "./TwoFactorVerification.css";
export const TwoFactorVerification = () => {
  const [input, setInput] = useState(["", "", "", ""]);
  const refs=useRef([])
  useEffect(() => {
    if (refs && refs.current[0]) {
      refs.current[0].focus();
      refs.current[0].classList.add("focus");
    }
  }, []);
  return (
    <div className="two-factor-container">
        <h1>Two Factor Authentication</h1>
      <div className="two-factor-div">
        {input.map((data, index) => {
          return (
            <input className="two-factor-input" type="text" maxLength={1} ref={(el) => (refs.current[index] = el)} />
          );
        })}
      </div>
      <button className="two-factor-submit">Submit</button>
    </div>
  );
};
