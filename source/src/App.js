import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import LandingNav from "./components/LandingPage/LandingNav";
import Main from './components/LandingPage/Main';
function App() {
  return (
    <>
    
    <Router>
    <Route path="/" component={Main} />
    </Router>
    </>
    
  );
}

export default App;
