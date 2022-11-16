import './App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/pages/HomePage/HomePage";


function App() {
  return (
<>
<BrowserRouter basename="portfolio">
  <Routes>

    <Route path="/" element={<HomePage/>}/>


  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
