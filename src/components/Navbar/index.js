import { getNavbar } from "../../utils/api";
import Navbar from "./clientcomponent/navbar";

export default async function NavbarMenu() {
  const data = getNavbar();
  const [datanavbar] = await Promise.all([data]);

  return (
    <div>
      <Navbar navbarmenu={datanavbar} />
    </div>
  );
}
