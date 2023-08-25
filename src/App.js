import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {movie} from "./components/ui/Movie";

function App() {
  return (

    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:search" element={<Movies/>}/>

      </Routes>
    </Router>
  );
}

export default App;
