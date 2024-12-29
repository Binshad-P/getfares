import Card from "../../components/Card/Card";
import { ToursData } from "../../constants/data";
const InternationalSchoolTrips = () => {
      const InternationalSchoolTrips = ToursData.filter((item) => item.category === "International School Trips");
  
  return (
    <div className="px-[5rem] pt-[5rem] pb-10 flex flex-col gap-10" id="International_School_Tours">
      <h1 className="text-3xl font-semibold">International School Trips</h1>

      <div className="grid grid-cols-3 gap-5 ">
        {InternationalSchoolTrips?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default InternationalSchoolTrips;
