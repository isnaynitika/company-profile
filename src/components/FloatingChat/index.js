import { getChat, getBot } from "../../utils/api";
import ChatComponent from "./clientcomponent/chat";

export default async function FloatingActionButton() {
  const data = getChat();
  const [datachat] = await Promise.all([data]);

  const bot = getBot();
  const [databot] = await Promise.all([bot]);

  return (
    <div>
      <ChatComponent chatbotdata={datachat.data.attributes} bot={databot.data} />
    </div>
  );
}
