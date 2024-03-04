import { getDevService } from "../../../utils/api";
import DevServiceComponent from "./clientcomponent/devservice";

export default async function DevService() {
  const data = getDevService();
  const [listdevservice] = await Promise.all([data]);

  return (
    <div>
      <DevServiceComponent devservicedata={listdevservice} />
    </div>
  );
}
