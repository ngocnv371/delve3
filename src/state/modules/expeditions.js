export const state = {
  items: [],
}

export const getters = {
  getByDungeonId(state) {
    return (id) => state.items.find((e) => e.dungeonId === id)
  },
  getByParty(state) {
    return (id) => state.items.find((e) => e.partyId === id)
  },
}

export const mutations = {
  ADD(state, expedition) {
    state.items.push({ ...expedition, loot: [], over: false })
  },
  REMOVE(state, expeditionId) {
    state.items = state.items.filter((i) => i.id !== expeditionId)
  },
  COMPLETE(state, { id }) {
    const ex = state.items.find((e) => e.id === id)
    if (!ex) {
      return
    }
    ex.over = true
    ex.loot = [
      {
        id: 1,
        quantity: 100,
      },
      {
        id: 2,
        quantity: 4,
      },
    ]
  },
}

let lastId = 0
export const actions = {
  start({ commit }, { party, dungeon }) {
    const id = ++lastId
    const now = new Date().getTime()
    commit('ADD', {
      id,
      partyId: party.id,
      dungeonId: dungeon.id,
      started: now,
    })
    const duration = 5000
    setTimeout(() => {
      commit('COMPLETE', { id })
    }, duration)
    return id
  },
}
