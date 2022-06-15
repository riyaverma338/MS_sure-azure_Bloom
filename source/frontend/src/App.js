// import "bootstrap/dist/css/bootstrap.min.css";
// import Topic1Detail from "./components/Modules/Disease/DiseaseInfo/Topic1Detail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/autherisation/Login";
import DoctorMain from "./components/Doctors/DoctorMain";

import HomePage from "./components/HomePage/HomePage";
import Main from "./components/LandingPage/Main";
import BreastCancer from "./components/Modules/Disease/DiseaseInitial/BreastCancer";
// import Topic1 from "../src/components/Modules/Disease/DiseaseInfoCards/Topic1";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/module" element={<BreastCancer />} />
          {/* <Route exact path="/doctor" element={<DoctorMain />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

//Femcure
//WooCure
//Bloom(in good health; free or recovered from illness, A person who is blooming has a healthy,
//energetic, and attractive appearance: Jo looked really well,)
//BloomHer

