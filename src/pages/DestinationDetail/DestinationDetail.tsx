import { useParams } from "react-router-dom";
import { DestinationData } from "../../constants/data";
const DestinationDetail = () => {
  const { id } = useParams();
  const destinationId = parseInt(id || "");

  const destination = DestinationData.find((item) => item.id === destinationId);

  return (
    <div className="  relative">
      <img
        src={destination?.image}
        alt="imgage"
        className="h-[100vh] w-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-20 flex flex-col items-center gap-5">
        <h1 className="text-white text-[5rem] font-bold">
          {destination?.title}
        </h1>
        <h3 className="text-white text-3xl">{destination?.location}</h3>
        <p className="text-white w-[80%] text-lg">{destination?.detail_description}</p>
      </div>
      <div className="absolute  z-10 top-0 w-full h-[100vh] bg-gradient-to-t from-[#081016a3] to-[#08202b00]"></div>
    </div>
  );
};

export default DestinationDetail;
