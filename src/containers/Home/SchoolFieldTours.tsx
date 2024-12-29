import Card from "../../components/Card/Card";
import { ToursData } from "../../constants/data";
const SchoolFieldTours = () => {
    const SchoolFieldTours = ToursData.filter((item) => item.category === "School Field Tours");
  
  return (
    <div className="px-[5rem] pt-[7rem] pb-10 flex flex-col gap-10" id="School_Field_Tours">
      <h1 className="text-3xl font-semibold">School Field Tours</h1>

      <div className="grid grid-cols-3 gap-5">
        {SchoolFieldTours?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default SchoolFieldTours;
