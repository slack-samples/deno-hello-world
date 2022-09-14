import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const GreetingFunctionDefinition = DefineFunction({
  callback_id: "greeting_function",
  title: "Generate a greeting",
  description: "Generate a greeting",
  source_file: "functions/greeting_function.ts",
  input_parameters: {
    properties: {
      recipient: {
        type: Schema.slack.types.user_id,
        description: "Greeting recipient",
      },
      message: {
        type: Schema.types.string,
        description: "Message to the recipient",
      },
    },
    required: ["message"],
  },
  output_parameters: {
    properties: {
      greeting: {
        type: Schema.types.string,
        description: "Greeting for the recipient",
      },
    },
    required: ["greeting"],
  },
});

export default SlackFunction(
  GreetingFunctionDefinition,
  ({ inputs }) => {
    const { recipient, message } = inputs;
    const salutations = ["Hello", "Hi", "Howdy", "Hola", "Salut"];
    const salutation =
      salutations[Math.floor(Math.random() * salutations.length)];
    const greeting =
      `${salutation}, <@${recipient}>! :wave: Someone sent the following greeting: \n\n>${message}`;
    return { outputs: { greeting } };
  },
);
