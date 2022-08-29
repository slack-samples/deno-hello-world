import { Trigger } from "deno-slack-api/types.ts";

const greetingTrigger: Trigger = {
  type: "shortcut",
  name: "Send a greeting",
  description: "Send greeting to channel",
  workflow: "#/workflows/greeting_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default greetingTrigger;
