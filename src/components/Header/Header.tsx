import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="bg-white p-10 flex items-center justify-between absolute top-0 w-full z-50">
      <div className=" font-bold text-xl">
        <Link to="/"><img src={logo} alt="logo" className="w-[15rem] h-[40px] object-cover"/> </Link>
      </div>

      <div className="flex gap-10 font-medium text-lg">
        <Link to="/">
          <p className=" hover:text-gray-500 duration-300">Home</p>
        </Link>
          <p className=" hover:text-gray-500 duration-300">About us</p>
        <Link to="/international-school-trips">
        <p className=" hover:text-gray-500 duration-300">International School Trips</p>
        </Link>
        <a href="#Field_Trips" className=" hover:text-gray-500 duration-300">Field Trips</a>
        <a href="#Heritage_Trips" className=" hover:text-gray-500 duration-300">Heritage Trips</a>
     
      </div>
    </div>
  );
};

export default Header;
