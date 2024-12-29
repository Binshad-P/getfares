import Card from "../../components/Card/Card";
import { ToursData } from "../../constants/data";
const FieldTrips = () => {
    const FieldTrips = ToursData.filter((item) => item.category === "Field Trips");
  
  return (
    <div className="px-[5rem] pt-[7rem] pb-10 flex flex-col gap-10" id="Field_Trips">
      <h1 className="text-3xl font-semibold"> Field Trips</h1>

      <div className="grid grid-cols-3 gap-5">
        {FieldTrips?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default FieldTrips
