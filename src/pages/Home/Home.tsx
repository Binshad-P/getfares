import React, { Suspense } from 'react';

const HomeHero = React.lazy(() => import("../../containers/Home/HomeHero"));
const CategoryOne = React.lazy(() => import("../../containers/Home/CategoryOne"));
const CategoryTwo = React.lazy(() => import("../../containers/Home/CategoryTwo"));
const CategoryThree = React.lazy(() => import("../../containers/Home/CategoryThree"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeHero />
        <CategoryOne />
        <CategoryTwo />
        <CategoryThree />
      </Suspense>
    </div>
  );
}

export default Home;
