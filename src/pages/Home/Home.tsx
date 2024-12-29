import React, { Suspense } from 'react';

const HomeHero = React.lazy(() => import("../../containers/Home/HomeHero"));
const InternationalSchoolTours = React.lazy(() => import("../../containers/Home/InternationalSchoolTours"));
const SchoolFieldTours = React.lazy(() => import("../../containers/Home/SchoolFieldTours"));
const EducationalTours = React.lazy(() => import("../../containers/Home/EducationalTours"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeHero />
        <InternationalSchoolTours />
        <SchoolFieldTours />
        <EducationalTours />
      </Suspense>
    </div>
  );
}

export default Home;
