import { Home } from "./Components/Home/Home";
import { BrowserRouter as Route,Switch, Link } from "react-router-DOM";
import { Feedback } from "./Components";
import "./App.css";
export const App = () => {
  return (
    <Router>
    <Link to="/">Back To Home</Link>
    <Link to="/emicalc">EMI Calculator</Link>
    <Home />                                                                                                        

    </Router>         
  );
};