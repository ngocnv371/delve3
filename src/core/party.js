import { getNextId } from './id'

export class TooManyMembersError extends Error {
  constructor() {
    super('Too many members')
    this.name = this.constructor.name
  }
}

export class InvalidPartyError extends Error {
  constructor() {
    super('Invalid party')
    this.name = this.constructor.name
  }
}

export function createParty(name = 'new party', members = []) {
  return {
    id: getNextId(),
    name,
    members,
  }
}

export function addMember(party, member) {
  if (!party) {
    throw new InvalidPartyError()
  }
  if (party.members.length >= 5) {
    throw new TooManyMembersError()
  }
  return {
    ...party,
    members: [...party.members, member],
  }
}

export function removeMember(party, member) {
  if (!party) {
    throw new InvalidPartyError()
  }
  return {
    ...party,
    members: party.members.filter((m) => m.id !== member.id),
  }
}
