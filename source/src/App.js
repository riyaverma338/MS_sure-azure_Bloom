import "bootstrap/dist/css/bootstrap.min.css";
// import Topic1Detail from "./components/Modules/Disease/DiseaseInfo/Topic1Detail";
import { Route, BrowserRouter as Router } from "react-router-dom";
import DoctorMain from "./components/Doctors/DoctorMain";
import HomePage from "./components/HomePage/HomePage";
import Main from "./components/LandingPage/Main";
import BreastCancer from "./components/Modules/Disease/DiseaseInitial/BreastCancer";
// import Topic1 from "../src/components/Modules/Disease/DiseaseInfoCards/Topic1";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/module" component={BreastCancer} />
        <Route exact path="/doctor" component={DoctorMain} />
      </Router>
      {/* <Topic1 /> */}
      {/* <Topic1Detail /> */}
    </>
  );
}

export default App;
