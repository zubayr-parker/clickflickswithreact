import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesInfo from "./pages/MoviesInfo";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:search" element={<Movies/>}/>
      <Route path="/:search/:imdbID" element={<MoviesInfo/>}/>

      </Routes>
    </Router>
  );
}

export default App;
