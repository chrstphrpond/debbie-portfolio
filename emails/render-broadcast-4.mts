import { render } from "@react-email/components";
import BroadcastEmailModule from "./broadcast-4.tsx";
const BroadcastEmail = (BroadcastEmailModule as any).default ?? BroadcastEmailModule;
const html = await render(BroadcastEmail({ firstName: "{{{FIRST_NAME|there}}}", recipientEmail: "{{{EMAIL}}}" }));
process.stdout.write(html);
