import Card from "../../components/Card/Card";
import { DestinationData } from "../../constants/data";
const CategoryThree = () => {
  return (
    <div className="px-[5rem] pt-[5rem] pb-10 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Category Three</h1>

      <div className="grid grid-cols-3 gap-5">
        {DestinationData?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryThree;
