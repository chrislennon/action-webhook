import * as core from '@actions/core'
import * as github from '@actions/github'
import { IncomingWebhook } from '@slack/webhook'
import { inspect } from 'util'
if (core.getInput('debug') === 'true') core.debug(inspect(github.context, {showHidden: false, depth: null}))

export const handler = async (url: string, message: string) => {
      try {
        console.log(`url ${url}`)
        const webhook = new IncomingWebhook(url, {
          icon_emoji: ':bowtie:',
        })
        const response = await webhook.send({
          text: message,
        })

        if (response.text == '1' || response.text === 'ok' )  return true
        return false

      } catch (error) {
        core.error(error)
        core.setFailed(error.message)
        return false
      }
  }

(async () => {
  const response = await handler(
    core.getInput('webhook'),
    core.getInput('message')
  )
  console.log('res', response)
  return response
})()


run(
  core.getInput('webhook'),
  core.getInput('message')
)
