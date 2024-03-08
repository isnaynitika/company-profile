import { getFooter } from "../../utils/api";
import FooterComponent from "./clientcomponent/footer";
import ContentFooter from "../ContentFooter";

export default async function Footer1() {
  const data = getFooter();
  const [footer] = await Promise.all([data]);

  return (
    <div>
      <FooterComponent datafooter={footer.data.attributes} />
      <div className="mt-6 md:mt-0">
        <ContentFooter />
      </div>
    </div>
  );
}
