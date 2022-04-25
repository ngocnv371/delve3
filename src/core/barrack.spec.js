import { addParty, removeParty } from './barrack'

import { InvalidPartyError } from './party'

describe('barrack', () => {
  it('Should able to add a party', () => {
    expect(addParty([], { id: 1 })).toEqual([{ id: 1 }])
    expect(addParty([{ id: 1 }], { id: 2 })).toEqual([{ id: 1 }, { id: 2 }])
    expect(addParty([{ id: 1 }], { id: 1 })).toEqual([{ id: 1 }])
    expect(() => addParty([1], null)).toThrowError(new InvalidPartyError())
  })

  it('Should able to remove a party', () => {
    expect(removeParty([], { id: 1 })).toEqual([])
    expect(removeParty([{ id: 1 }], { id: 2 })).toEqual([{ id: 1 }])
    expect(removeParty([{ id: 1 }], { id: 1 })).toEqual([])
    expect(removeParty([{ id: 1 }, { id: 2 }], { id: 1 })).toEqual([{ id: 2 }])
  })
})
