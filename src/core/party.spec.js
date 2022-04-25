import {
  InvalidPartyError,
  TooManyMembersError,
  addMember,
  createParty,
  removeMember,
} from './party'

describe('party', () => {
  it('Should able to create a party', () => {
    expect(createParty('my party').name).toEqual('my party')
    expect(createParty('my party', [1, 2, 3]).members).toEqual([1, 2, 3])
  })

  it('Should able to add a member', () => {
    expect(addMember(createParty(), 4).members).toEqual([4])
    expect(addMember(createParty('', [1, 2, 3]), 4).members).toEqual([
      1, 2, 3, 4,
    ])
  })

  it('Should not able to add to an invalid party', () => {
    expect(() => addMember(null, 6)).toThrowError(new InvalidPartyError())
  })

  it('Should not able to add more than 5 members', () => {
    expect(() => addMember(createParty('', [1, 2, 3, 4, 5]), 6)).toThrowError(
      new TooManyMembersError()
    )
  })

  it('Should able to remove a member', () => {
    const before = createParty('', [{ id: 1 }, { id: 2 }, { id: 3 }])
    expect(removeMember(before, { id: 3 }).members).toEqual([
      { id: 1 },
      { id: 2 },
    ])
    expect(removeMember(createParty()).members).toEqual([])
  })
})
