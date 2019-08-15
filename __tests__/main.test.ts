import { handler }  from '../src/main'
import dotenv from 'dotenv'
import * as path from 'path'

describe('Basic Tests', () => {
  beforeAll(() => {
    dotenv.config(path.resolve(__dirname + './../.env'))
  });

  it('Sends a message to a webhook', async () => {
    const url = process.env.WEBHOOK_URL || ''
    const message = 'Successful test message!'
    const response = await handler(url, message)
    expect(response).toEqual(true)
  });

});
