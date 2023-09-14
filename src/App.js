import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <h4 className="text-center mt-5 pt-5 ">
        please update all dependencies by using <h2>npm update</h2>
      </h4>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
