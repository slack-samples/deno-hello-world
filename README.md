# Deno Hello World Slack App

This sample app demonstrates how to use a function, workflow, and trigger to
send a greeting to channel.

Before getting started, make sure you have a development workspace where you
have permissions to install apps. If you don’t have one set up, go ahead and
[create one](https://slack.com/create).

## Demo

First, make sure your CLI is [authorized]([https://api.slack.com/future/](https://api.slack.com/future/quickstart#authorize-cli) to your workspace. 

To run this app in your workspace, first create a new app and select the 
"Hello World" template:

```zsh
$ slack create my-app
Select from a template to build from:

> Hello World
  A simple workflow that sends a greeting

```

This will create a new Run On Slack app project that you can install into 
your workspace. 

Change directories into your project's folder, then deploy your app:

```zsh
$ slack deploy
```

Once your app is fully deployed, you can now build a 
[Shortcut trigger](https://api.slack.com/future/triggers/shortcut):

```zsh
$ slack trigger create --trigger-def "./triggers/greeting_trigger.ts"
```

You'll know the trigger was created when you see something like this:

```zsh
⚡ Trigger created
   Trigger ID:   Ft01234567
   Trigger Type: shortcut
   Trigger Name: Send a greeting
   URL: https://slack.com/shortcuts/Ft041GUKKFEE/753834685412dfbbf4d58998c1b56933
```

Copy the `URL` from the terminal output and paste it into any public channel
in your workspace. This will unfurl into a card with a **Run** button. You will 
also see your shortcut in the bookmarks bar in the `Workflows` folder. 

Next, start your development server:

```zsh
$ slack run
```

Once your development server is running, click the run button on the unfurl card or 
select your shortcut's name from the `Workflows` folder in the bookmark bar to 
start the workflow assigned to that trigger.

In the modal that pops up, fill out the form and click the **Send greeting** button.

In the channel you executed the workflow from, you'll see a new message 
for the user you selected in the form. 

## Setup

### Install the Slack CLI

To use this template, you first need to install and configure the Slack CLI.
Step-by-step instructions can be found in our
[Quickstart Guide](https://api.slack.com/future/quickstart).

## Running Your Project Locally

While building your app, you can see your changes propagated to your workspace
in real-time with `slack run`. You'll know an app is the development version
because the name has the string `(dev)` appended.

```zsh
# Clone this project onto your machine
$ slack create my-app -t slack-samples/deno-hello-world

# Change into this project directory
$ cd my-app

# Run app locally
$ slack run

Connected, awaiting events
```

## Testing

For an example of how to test a function, see
`functions/greeting_function_test.ts`. Test filenames should be suffixed with
`_test`.

Run all tests with `deno test`:

```zsh
$ deno test
```

## Deploying Your App

When you're done with development, you can deploy your app to a production
workspace using `slack deploy`:

```zsh
$ slack deploy
```

## Project Structure

### `manifest.ts`

The [app manifest](https://api.slack.com/future/manifest) contains the app's
configuration. This file defines attributes like app name and description.

### `slack.json`

Used by the CLI to interact with the project's SDK dependencies. It contains
script hooks that are executed by the CLI and implemented by the SDK.

### `/functions`

[Functions](https://api.slack.com/future/functions) are reusable building blocks
of automation that accept inputs, perform calculations, and provide outputs.
Functions can be used independently or as steps in Workflows.

### `/workflows`

A [Workflow](https://api.slack.com/future/workflows) is a set of steps that are
executed in order. Each step in a Workflow is a function.

Workflows can be configured to run without user input or they can wait for input
via form before continuing to the next step.

### `/triggers`

[Triggers](https://api.slack.com/future/triggers) determine when Workflows are
executed. A trigger file describes a scenario in which a workflow should be run,
such as a user pressing a button or when a specific event occurs.

## Resources

To learn more about developing with the CLI, you can visit the following guides:

- [Creating a new app with the CLI](https://api.slack.com/future/create)
- [Configuring your app](https://api.slack.com/future/manifest)
- [Developing locally](https://api.slack.com/future/run)

To view all documentation and guides available, visit the
[Overview page](https://api.slack.com/future/overview).
