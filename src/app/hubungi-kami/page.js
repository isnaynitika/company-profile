import { getContact, getLogoClient } from "../../utils/api";
import ContactComponent from "./clientcomponent/contact";

export default async function Contact() {
  const contact = getContact();
  const [listcontact] = await Promise.all([contact]);

  const logodata = getLogoClient();
  const [logoclient] = await Promise.all([logodata]);

  return (
    <div>
      <ContactComponent contactdata={listcontact} listlogo={logoclient} />
    </div>
  );
}
