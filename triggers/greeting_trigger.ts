import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import GreetingWorkflow from "../workflows/greeting_workflow.ts";

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const greetingTrigger: Trigger<typeof GreetingWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Send a greeting",
  description: "Send greeting to channel",
  workflow: `#/workflows/${GreetingWorkflow.definition.callback_id}`,
  inputs: {
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
  },
};

export default greetingTrigger;
