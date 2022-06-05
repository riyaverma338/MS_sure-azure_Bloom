import React from "react";
import Sidebar from "../../Template/Sidebar";
import "../../../../css/BreastCancerCSS/Topic1Detail.css";

const Topic1Detail = () => {
  return (
    <>
      <div className="detail-main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="detail-mainbar">
        <h2 className="detail-section-head">What Is Cancer?</h2>
          <hr />
          <h3 className="detail-head">Understanding Breast Cancer</h3>
          <p className="detail-desc">
            Cancer is a broad term for a class of diseases characterized by
            abnormal cells that grow and invade healthy cells in the body.
            Breast cancer starts in the cells of the breast as a group of cancer
            cells that can then invade surrounding tissues or spread
            (metastasize) to other areas of the body.
          </p>
          <img
            src="https://www.nationalbreastcancer.org/wp-content/uploads/cancer-cell-reproduction-what-is-cancer.jpeg"
            className="img1"
            alt="img1"
          />
          <hr />
          <h3 className="detail-head">What Causes Cancer To Develop?</h3>
          <p className="detail-desc">
            Cancer begins in the cells which are the basic building blocks that
            make up tissue. Tissue is found in the breast and other parts of the
            body. Sometimes, the process of cell growth goes wrong and new cells
            form when the body doesn\n’t need them and old or damaged cells do
            not die as they should. When this occurs, a build up of cells often
            forms a mass of tissue called a lump, growth, or tumor.
          </p>
          <p className="detail-desc">
            Breast cancer occurs when malignant tumors develop in the breast.
            These cells can spread by breaking away from the original tumor and
            entering blood vessels or lymph vessels, which branch into tissues
            throughout the body. When cancer cells travel to other parts of the
            body and begin damaging other tissues and organs, the process is
            called metastasis.
          </p>
        </div>
      </div>
    </>
  );
};

export default Topic1Detail;
