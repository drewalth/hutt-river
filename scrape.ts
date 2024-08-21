import { scrapeFbEvent } from 'facebook-event-scraper';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'https://www.facebook.com/events/431403149660388';

(async () => {
  try {
    const eventData = await scrapeFbEvent(url);

    const filePath = path.join(__dirname, './src/event-data/data.json');
    fs.writeFileSync(filePath, JSON.stringify(eventData, null, 2));

  } catch (err) {
    console.error(err);
  }
})()
