import React from "react";

const cardList = [
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_overview.svg",
      text: "What is Breast Cancer ?",
      
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_self-exam-one-color.svg",
      text: "Early Detection",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_diagnose.svg",
      text: "Diagnosis",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_stages.svg",
      text: "Stages",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_types.svg",
      text: "Types of Breast Cancer",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_treatment.svg",
      text: "Treatment",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Individual-Webs-Icons-v03_myths.svg",
      text: "Myths",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/faqs.png",
      text: "FAQs",
    },
    {
      url: "https://www.nationalbreastcancer.org/wp-content/uploads/Breast-Health-Guide-Icon.png",
      text: "Find Support",
    },
  ];
  
  

export default function Topic2Detail() {
    const renderCardItems = (item) => {
        return (
          <div className="info-cards">
            <img src={item.url} className="card-img" alt="icon" />
            <p className="card_title">{item.text}</p>
          </div>
        );
      };
  return (
    <>
      <div className="mainbar">
        <h2 className="section-head">Learn about breast cancer</h2>
        <p className="section-content">
          One of our top priorities is educating women on what they can do to be
          proactive with their breast health. Knowledge and early detection
          saves lives
        </p>
        <hr />
        <h3 className="card-head">Start Here</h3>
        <div className="info-cards-main-container">
          {cardList.map((item) => renderCardItems(item))}
        </div>
      </div>
    </>
  );
}
