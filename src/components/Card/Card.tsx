import { Link } from "react-router-dom";

type LocationData = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
};

const Card = ({ data }: { data: LocationData }) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-200 shadow-md">
      <img
        src={data?.image}
        alt="image"
        className="object-cover w-full h-[40vh] rounded-t-md object-top"
      />
      <div className="p-4 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">{data?.title}</h1>
          <p>{data?.location}</p>
        </div>
        <p>{data?.description}</p>

        <Link to={`/destination/${data.id}`}>
          <button className="bg-white text-blue-600 text-sm text-start">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
