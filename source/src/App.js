import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Main from "./components/LandingPage/Main";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={HomePage} />
      </Router>
    </>
  );
}

export default App;
