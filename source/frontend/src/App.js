import "bootstrap/dist/css/bootstrap.min.css";
// import Topic1Detail from "./components/Modules/Disease/DiseaseInfo/Topic1Detail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/autherisation/Login";
import HomePage from "./components/HomePage/HomePage";
import Main from "./components/LandingPage/Main";
import BreastCancer from "./components/Modules/Disease/DiseaseInitial/BreastCancer";
// import Topic1 from "../src/components/Modules/Disease/DiseaseInfoCards/Topic1";
function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/login" element={<Login/>} />

        </Routes>
      </Router>
      {/* <BreastCancer /> */}
      {/* <Topic1 /> */}
      {/* <Topic1Detail /> */}
    
    </>
  );
}

export default App;
