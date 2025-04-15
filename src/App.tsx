import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Visualizations from "./pages/Visualizations";
import Navbar from "./pages/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualization" element={<Visualizations />} />
      </Routes>
    </div>
  );
};

export default App;
