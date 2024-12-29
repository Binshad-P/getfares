import Card from "../../components/Card/Card";
import { ToursData } from "../../constants/data";

const EducationalTours = () => {

  const educationalTours = ToursData.filter((item) => item.category === "Educational Tours");

  return (
    <div className="px-[5rem] pt-[5rem] pb-10 flex flex-col gap-10" id="Educational_Tours">
      <h1 className="text-3xl font-semibold">Educational Tours</h1>

      <div className="grid grid-cols-3 gap-5">
        {educationalTours?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default EducationalTours;
