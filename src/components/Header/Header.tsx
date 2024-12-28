import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white p-10 flex items-center justify-between absolute top-0 w-full z-50">
      <div className=" font-bold text-xl">
        <Link to="/">Logo </Link>
      </div>

      <div className="flex gap-6 text-lg">
        <Link to="/">
          <p className=" hover:text-gray-200 ">Home</p>
        </Link>
        <p className=" hover:text-gray-200">Resources</p>
      </div>
    </div>
  );
};

export default Header;
