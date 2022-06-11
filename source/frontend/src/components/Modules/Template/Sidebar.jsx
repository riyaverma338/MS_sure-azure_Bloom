import React from "react";
import "../../../css/Sidebar.css";
import { GrAddCircle, GrMenu } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { Button } from "react-bootstrap";

const liItems = [
  "What is Breast Cancer ?",
  "Early Detection",
  "Diagnosis",
  "Stages",
  "Types of Breast Cancer",
  "Treatment",
  "Myths",
  "FAQs",
  "Get Support",
  "Self Assessment"

];
const Sidebar = ({handlesetState}) => {
  const renderListElement = (text,index) => {
  console.log(index)
    

    return (
      <div className="info-list">
        <GrAddCircle />
        <li className="li-info" onClick={e=>handleClick(e)}>{text}</li>
      </div>
    );
  };

  const handleClick=(e,index)=>{
    e.preventDefault();
    handlesetState(index)
  }


  return (
    <>
      <div className="info-sidebar">
        <div className="input-field">
          <input placeholder="Search Resources" className="inner-input-field" />
          <BsSearch />
        </div>
        <div>
          <ul>
            {liItems.map((item,index) => {
            return(
            <div className="info-list">
            <GrAddCircle />
            <li className="li-info" onClick={e=>handleClick(e,index)}>{item}</li>
          </div>
            // renderListElement(item,index))
          )})}
          </ul>
        </div>
      </div>
      {/* <div className="module-btns">
      <Button >Get Support</Button>
      <Button>Self Assessment</Button>
      </div> */}
      <div className="responsive-menu">
        <GrMenu className="menu-icon"/>
        <BsSearch className="search-icon" />
      </div>
    </>
  );
};

export default Sidebar;
