import { scrapeFbEvent } from 'facebook-event-scraper'
import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const url = 'https://www.facebook.com/events/431403149660388'

export const run = () => scrapeFbEvent(url)
;(async () => {
  try {
    console.log('Scraping event data...')
    const eventData = await run()

    if (process.env.CI) {
      console.log('CI detected, skipping writing data')
      return
    }

    const filePath = path.join(__dirname, './src/event-data/data.json')
    fs.writeFileSync(filePath, JSON.stringify(eventData, null, 2))
    console.log(`Data written to ${filePath}`)
  } catch (err) {
    console.error(err)
  }
})()
