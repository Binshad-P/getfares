import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutRoutes from "./routes/LayoutRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<LayoutRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


