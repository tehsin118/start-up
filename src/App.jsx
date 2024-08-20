import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Login from "./page/account/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
