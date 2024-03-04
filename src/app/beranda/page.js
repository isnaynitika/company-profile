import { getHome } from "../../utils/api";
import HomeComponent from "./clientcomponent/home";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Landing() {
  const data = getHome();
  const [listdata] = await Promise.all([data]);
  return (
    <div className="h-full ">
      <Suspense fallback={<Loading />}>
        <HomeComponent homedata={listdata} />
      </Suspense>
    </div>
  );
}
