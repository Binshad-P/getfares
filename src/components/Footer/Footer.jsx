import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#0e214b] text-white py-10 px-[5rem]">
      <div className=" grid grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="logo" className="w-[15rem] h-[60px] object-cover"/>
          <p>The mission of our company is to help businesses achieve their goals.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Heritage Trips
              </Link>
            </li>
            <li>
              <Link to="/international-school-tours" className="hover:underline">
                International School Trips
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Field Trips
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Trip Categories</h3>
          <ul className="space-y-2">
          <li>
              <Link to="/international-school-tours" className="hover:underline">
                International School Trips
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline">
              Field Trips
              </Link>
            </li>
       
            <li>
              <Link to="/" className="hover:underline">
                Heritage Trips
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">

          <p>
            <a href="mailto:info@tours.com" className="hover:underline">
              info@tours.com
            </a>
          </p>
          <p>Phone : +123 456 789</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 border-t border-gray-600 pt-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Tour Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
