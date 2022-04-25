import { InvalidPartyError } from './party'

export function addParty(barrack = [], party) {
  if (!party) {
    throw new InvalidPartyError()
  }
  if (barrack.findIndex((p) => p.id === party.id) >= 0) {
    return barrack
  }
  return [...barrack, party]
}

export function removeParty(barrack = [], party) {
  if (!party) {
    throw new InvalidPartyError()
  }
  return barrack.filter((p) => p.id !== party.id)
}
