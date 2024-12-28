import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import DestinationDetail from "../pages/DestinationDetail/DestinationDetail";
const LayoutRoutes = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default LayoutRoutes;
