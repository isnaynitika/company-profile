import { getCustomDev } from "../../../utils/api";
import CustomDevComponent from "./clientcomponent/customdev";

export default async function CustomDev() {
  const data = getCustomDev();
  const [listcutomdev] = await Promise.all([data]);

  return (
    <div>
      <CustomDevComponent customdevdata={listcutomdev} />
    </div>
  );
}
