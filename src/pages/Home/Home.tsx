import React, { Suspense } from 'react';

const HomeHero = React.lazy(() => import("../../containers/Home/HomeHero"));
const InternationalSchoolTrips = React.lazy(() => import("../../containers/Home/InternationalSchoolTrips"));
const FieldTrips = React.lazy(() => import("../../containers/Home/FieldTrips"));
const HeritageTrips = React.lazy(() => import("../../containers/Home/HeritageTrips"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeHero />
        <InternationalSchoolTrips />
        <FieldTrips />
        <HeritageTrips />
      </Suspense>
    </div>
  );
}

export default Home;
