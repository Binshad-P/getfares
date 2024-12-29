import Card from "../../components/Card/Card";
import { ToursData } from "../../constants/data";

const HeritageTrips = () => {

  const HeritageTrips = ToursData.filter((item) => item.category === "Heritage Trips");

  return (
    <div className="px-[5rem] pt-[5rem] pb-10 flex flex-col gap-10" id="Heritage_Trips">
      <h1 className="text-3xl font-semibold">Heritage Trips</h1>

      <div className="grid grid-cols-3 gap-5">
        {HeritageTrips?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HeritageTrips;
