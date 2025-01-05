import React from "react";
import { Link } from "react-router-dom";
import "./Project.css"
const linkItem = [
  {
    name: "faq",
    route: "/faq",
  },
  {
    name: "faq",
    route: "/faq",
  },
  {
    name: "faq",
    route: "/faq",
  },
  {
    name: "faq",
    route: "/faq",
  },
  {
    name: "faq",
    route: "/faq",
  },
];
const Project = () => {
  return (
    <div className="project-container">
      <div className="project-link">
        {linkItem.map((data) => (
         <div className="project-item">
           <Link to={data.route}>{data.name}</Link>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
