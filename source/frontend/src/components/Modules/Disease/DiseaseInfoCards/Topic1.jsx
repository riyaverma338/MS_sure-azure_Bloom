import React from "react";
import "../../../../css/BreastCancerCSS/Topic1.css";
import { BsArrowRightCircle } from "react-icons/bs";

const cardList = [
  {
    url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_What-is-cancer.svg",
    text: "What is Cancer ?",
    content:
      "Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade  healthy cells in the body.  Breast cancer starts in the cells of the breast as a group of cancer cells ...",
  },
  {
    url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_Cancer-causes.svg",
    text: "Causes of Breast Cancer",
    content:
      "Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade  healthy cells in the body.  Breast cancer starts in the cells of the breast as a group of cancer cells ...",
  },
  {
    url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_BC-Facts.svg",
    text: "Breast Cancer Facts",
    content:
      "Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade  healthy cells in the body.  Breast cancer starts in the cells of the breast as a group of cancer cells ...",
  },
  {
    url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_Tumor-Types.svg",
    text: "Breast Tumor",
    content:
      "Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade  healthy cells in the body.  Breast cancer starts in the cells of the breast as a group of cancer cells ...",
  },
  {
    url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_Breast-anatomy.svg",
    text: "Breast Anatomy",
    content:
      "Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade  healthy cells in the body.  Breast cancer starts in the cells of the breast as a group of cancer cells ...",
  },
];

const renderCardItems = (item) => {
  return (
    <div className="long-info-cards">
      <div className="long-info-card-content">
        <img src={item.url} className="long-card-img" alt="icon" />
        <div className="long-info-card-content-title">
          <p className="long-card_title">{item.text}</p>
          <p className="long-card_content">{item.content}</p>
        </div>
      </div>
      <div>
        <BsArrowRightCircle className="icon-size" />
      </div>
    </div>
  );
};

const Topic1 = () => {
  return (
    <>
      <div className="main-container">
        <div className="topic-mainbar">
          <h2 className="topic-section-head">What is Breast Cancer?</h2>
          <p className="topic-section-content">
            One of our top priorities is educating women on what they can do to
            be proactive with their breast health. Knowledge and early detection
            saves lives
          </p>
          <div className="long-info-cards-main-container">
            {cardList.map((item) => renderCardItems(item))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic1;
