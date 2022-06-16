import React,{useState} from "react";
import "../../../../css/BreastCancerCSS/BreastCancer.css";
import Sidebar from "../../Template/Sidebar";
import Footer from "../../../LandingPage/Footer";
import Topic2Detail from "../DiseaseInfo/Topic2Detail";
import Topic1 from "../DiseaseInfoCards/Topic1";
import DoctorMain from "../../../Doctors/DoctorMain";
import HealthBot from "../healthBot/HealthBot";
import ModuleNav from "../../Template/ModuleNav";


const BreastCancer = () => {

  const [state,setState]=useState(9);

  var comp;
  switch(state){
    case 0: comp=<Topic1 />
             break;
    
    case 8: comp=<DoctorMain/>
            break;
    case 9: comp=<Topic2Detail/>
             break;
    default : comp=<Topic2Detail />
  }

  return (
    <>
    <ModuleNav/>
      <div className="main-container" id="diseaseContainer">
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
