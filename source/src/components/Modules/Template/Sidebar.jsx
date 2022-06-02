import React from "react";
import "../../../css/Sidebar.css";
import { GrAddCircle, GrMenu } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

const liItems = [
  "What is Breast Cancer ?",
  "Early Detection",
  "Diagnosis",
  "Stages",
  "Types of Breast Cancer",
  "Treatment",
  "Myths",
  "FAQs",
  "Find Support",
];
const Sidebar = () => {
  const renderListElement = (text) => {
    return (
      <div className="info-list">
        <GrAddCircle />
        <li className="li-info">{text}</li>
      </div>
    );
  };

  return (
    <>
      <div className="info-sidebar">
        <div className="input-field">
          <input placeholder="Search Resources" className="inner-input-field" />
          <BsSearch />
        </div>
        <div>
          <ul>{liItems.map((item) => renderListElement(item))}</ul>
        </div>
      </div>
      <div className="responsive-menu">
        <GrMenu className="menu-icon"/>
        <BsSearch className="search-icon" />
      </div>
    </>
  );
};

export default Sidebar;
