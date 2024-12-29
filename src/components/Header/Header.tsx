import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="bg-white p-10 flex items-center justify-between absolute top-0 w-full z-50">
      <div className=" font-bold text-xl">
        <Link to="/"><img src={logo} alt="logo" className="w-[15rem] h-[60px] object-cover"/> </Link>
      </div>

      <div className="flex gap-10 font-medium text-lg">
        <Link to="/">
          <p className=" hover:text-gray-500 duration-300">Home</p>
        </Link>
        <Link to="/international-school-tours">
        <p className=" hover:text-gray-500 duration-300">International School Tours</p>
        </Link>
        <a href="#School_Field_Tours" className=" hover:text-gray-500 duration-300">School Field Tours</a>
        <a href="#Educational_Tours" className=" hover:text-gray-500 duration-300">Educational Tours</a>
     
      </div>
    </div>
  );
};

export default Header;
