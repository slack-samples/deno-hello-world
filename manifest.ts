import { Manifest } from "deno-slack-sdk/mod.ts";
import GreetingWorkflow from "./workflows/greeting_workflow.ts";

export default Manifest({
  name: "deno-hello-world",
  description:
    "A sample that demonstrates using a function, workflow and trigger to send a greeting",
  icon: "assets/icon.png",
  workflows: [GreetingWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
