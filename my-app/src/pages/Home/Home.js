import React, { useEffect, useState, useContext } from "react";
import assets from "../../assests";
import "./Home.css";
import { ThemeContext } from "../../component/ThemeContext/ThemeContext"

const githubIconLight =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const githubIconDark =
  "data:image/png;base64,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";

const socialLinksBase = [
  {
    href: "https://github.com/ekata",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://leetcode.com/yourusername",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    alt: "LeetCode",
  },
  {
    href: "https://codeforces.com/profile/yourusername",
    icon: "https://sta.codeforces.com/s/84849/images/codeforces-logo-with-telegram.png",
    alt: "Codeforces",
  },
];

const fullText = "I am Ekata Kumari";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    {
      href: "https://github.com/ekata",
      icon: theme === "dark" ? githubIconDark : githubIconLight,
      alt: "GitHub",
    },
    ...socialLinksBase.slice(1),
  ];

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping]);

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={assets.profile} alt="pic" />
        <h1>{displayText}</h1>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.alt}
            >
              <img
                src={link.icon}
                alt={link.alt}
                style={{
                  width: 32,
                  height: 32,
                  margin: "0 8px",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
