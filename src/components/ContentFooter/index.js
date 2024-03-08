import { getFooter } from "../../utils/api";
import MainfooterComponent from "./clientcomponent/footerutama";

export default async function ContentFooter() {
  const data = getFooter();
  const [datafooter] = await Promise.all([data]);

  return (
    <div>
      <MainfooterComponent footercontent={datafooter.data.attributes} />
    </div>
  );
}
