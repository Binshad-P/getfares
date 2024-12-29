import { useParams } from "react-router-dom";
import { ToursData } from "../../constants/data";
const DestinationDetail = () => {
  const { id } = useParams();
  const destinationId = parseInt(id || "");

  const destination = ToursData.find((item) => item.id === destinationId);

  return (
    <div className="  ">
      <img
        src={destination?.image}
        alt="imgage"
        className="h-[100vh] w-full object-cover"
      />
      <div className="py-20 flex flex-col items-center gap-5">
        <h1 className="text-black text-[5rem] font-bold">
          {destination?.title}
        </h1>
        <h3 className="text-black text-3xl">{destination?.location}</h3>
        <p className="text-black w-[80%] text-lg">
          {destination?.detail_description}
        </p>
        <button className="bg-black text-white py-4 font-bold text-xl px-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 ">
          Enquiry Now
        </button>
      </div>
      <div className="absolute  z-10 top-0 w-full h-[100vh] bg-gradient-to-t from-[#081016a3] to-[#08202b00]"></div>
    </div>
  );
};

export default DestinationDetail;
