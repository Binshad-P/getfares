import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white p-10 flex items-center justify-between absolute top-0 w-full z-50">
      <div className=" font-bold text-xl">
        <Link to="/">Logo </Link>
      </div>

      <div className="flex gap-10 font-medium text-lg">
        <Link to="/">
          <p className=" hover:text-gray-500 duration-300">Home</p>
        </Link>
        <a href="#International_School_Tours" className=" hover:text-gray-500 duration-300">International School Tours</a>
        <a href="#School_Field_Tours" className=" hover:text-gray-500 duration-300">School Field Tours</a>
        <a href="#Educational_Tours" className=" hover:text-gray-500 duration-300">Educational Tours</a>
     
      </div>
    </div>
  );
};

export default Header;
