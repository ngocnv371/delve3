import { getNextId } from './id'

describe('id', () => {
  it('create a new ID every invoke', () => {
    const first = getNextId()
    expect(getNextId()).toBeGreaterThan(first)
  })
})
