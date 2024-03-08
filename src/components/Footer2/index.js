import { getFooter2 } from "../../utils/api";
import Footer2Component from "./clientcomponent/footer";
import ContentFooter from "../ContentFooter";

export default async function Footer2() {
  const data = getFooter2();
  const [footer] = await Promise.all([data]);

  return (
    <div>
      <Footer2Component datafooter={footer.data.attributes} />
      <div className="-mt-20">
        <ContentFooter />
      </div>
    </div>
  );
}
