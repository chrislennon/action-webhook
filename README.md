# action-webhook

A simple action to send a message to a webhook for example Slack, Teams, Discord...

## Usage

Example
````yaml
name: Test Notification

on:
  push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: chrislennon/action-webhook@v1
        with:
          message: >
            A message from GitHub actions
            More information here...
          webhook: ${{ secrets.WEBHOOK_URL }}
          debug: ${{ secrets.ACTIONS_STEP_DEBUG }}
````

The for v1 the `debug` option will output the [github.context](https://github.com/actions/toolkit/tree/master/packages/github) object of the event

For the `debug` option to work - you must also set the secret `ACTIONS_STEP_DEBUG` to `true` 
