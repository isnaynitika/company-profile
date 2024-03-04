import { getPortofolio } from "../../utils/api";
import PortofolioComponent from "./clientcomponent/portofolio";

export default async function Work() {
  const portofolio = getPortofolio();
  const [portofoliodata] = await Promise.all([portofolio]);

  return (
    <div>
      <PortofolioComponent listporto={portofoliodata} />
    </div>
  );
}
