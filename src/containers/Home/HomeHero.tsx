const HomeHero = () => {
    return (
      <div>
        <div className="bg-img h-[100vh] bg-cover bg-center flex items-center justify-center relative">
          <div className="text-center text-white  absolute z-20 flex justify-center items-center flex-col   gap-5">
            <h1 className="text-[5rem] font-bold">Welcome to our site</h1>
            <p className="text-3xl w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-lg mt-4">Get Started</button>
          </div>
        </div>
        <div className="absolute  z-10 top-0 w-full h-[100vh] bg-gradient-to-t from-[#081016a3] to-[#08202b00]"></div>

      </div>
    );
  };
  
  export default HomeHero;
  