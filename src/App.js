import './App.css';
import {Header} from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";

export const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}
