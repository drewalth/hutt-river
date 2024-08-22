import { run } from './scrape'
import { describe, it, expect } from 'vitest'

describe('scrape', () => {
  it('should run without error', async () => {
    const data = await run()
    expect(data.name).toBe(
      'Hutt River Te Awa Kairangi Whitewater Festival, 5th Annual',
    )
  })
})
