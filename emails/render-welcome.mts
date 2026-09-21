import { render } from "@react-email/components";
import WelcomeModule from "./welcome.tsx";
const WelcomeEmail = (WelcomeModule as any).default ?? WelcomeModule;
const html = await render(WelcomeEmail({ firstName: "{{{FIRST_NAME|there}}}" }));
process.stdout.write(html);
