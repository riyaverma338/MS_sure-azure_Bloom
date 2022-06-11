import React,{useState} from "react";
import "../../../../css/BreastCancerCSS/BreastCancer.css";
import Sidebar from "../../Template/Sidebar";
import Footer from "../../../LandingPage/Footer";
import Topic2Detail from "../DiseaseInfo/Topic2Detail";
// import Topic1Detail from "../DiseaseInfo/Topic1Detail";
import DoctorMain from "../../../Doctors/DoctorMain";


const BreastCancer = () => {

  const [state,setState]=useState(0);

  var comp;
  switch(state){
    case 0: comp=<Topic2Detail />
             break;
    case 8: comp=<DoctorMain/>
            break;
    default : comp=<Topic2Detail />
    // case 1 : comp=<Topic1Detail />
    //         break;
  }

  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <Sidebar handlesetState={setState}/>
        </div>
       
        {comp}
      </div>
      <Footer/>
    </>
  );
};

export default BreastCancer;
