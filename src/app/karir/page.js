import { getCareer } from "../../utils/api";
import CareerComponent from "./clientcomponent/career";

export default async function Career() {
  const data = getCareer();
  const [listdata] = await Promise.all([data]);

  return (
    <div>
      <CareerComponent careerdata={listdata} />
    </div>
  );
}
