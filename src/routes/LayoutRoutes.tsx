import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import DestinationDetail from "../pages/DestinationDetail/DestinationDetail";
import InternationalSchoolTourList from "../pages/InternationalSchoolTourList/InternationalSchoolTourList";
const LayoutRoutes = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/international-school-trips" element={<InternationalSchoolTourList />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default LayoutRoutes;
