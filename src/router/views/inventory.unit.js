import Inventory from './inventory'

describe('@views/inventory', () => {
  it('is a valid view', () => {
    expect(Inventory).toBeAViewComponent()
  })
})
