import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import GreetingFunction from "./greeting_function.ts";

const { createContext } = SlackFunctionTester("greeting_function");

Deno.test("Greeting function test", async () => {
  const inputs = { message: "Welcome to the team!" };
  const { outputs } = await GreetingFunction(createContext({ inputs }));
  assertEquals(
    outputs?.greeting.includes("Welcome to the team!"),
    true,
  );
});
