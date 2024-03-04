import { getPrincipal } from "../../../utils/api";
import PrincipalComponent from "./clientcomponent/principal";

export default async function PrincipalProduct() {
  const data = getPrincipal();
  const [listprincipal] = await Promise.all([data]);

  return (
    <div>
      <PrincipalComponent principaldata={listprincipal} />
    </div>
  );
}
