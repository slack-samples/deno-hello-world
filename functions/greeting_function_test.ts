import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assert } from "@std/assert";
import GreetingFunction from "./greeting_function.ts";

const { createContext } = SlackFunctionTester("greeting_function");

Deno.test("Greeting function test", async () => {
  const inputs = { message: "Welcome to the team!", recipient: "User" };
  const { outputs } = await GreetingFunction(createContext({ inputs }));
  assert(outputs?.greeting.includes("Welcome to the team!"));
  assert(outputs?.greeting.includes("User"));
});
