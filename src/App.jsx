import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
