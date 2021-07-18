export const state = {
  adventurers: [],
}

export const mutations = {
  SET(state, adventurers) {
    state.adventurers = adventurers
  },

  REMOVE(state, { id }) {
    state.adventurers = state.adventurers.filter((p) => p.id !== id)
  },
}

export const getters = {}

export const actions = {
  init({ state, commit }) {
    // load
    const fake = [
      { id: 1, name: 'John Duke', level: 9, class: 'mage' },
      { id: 2, name: 'Woah Dude', level: 9, class: 'thief' },
      { id: 3, name: 'Holly Beb', level: 9, class: 'summoner' },
      { id: 4, name: 'Mance Hax', level: 9, class: 'rogue' },
      { id: 5, name: 'Kay Ydi', level: 9, class: 'knight' },
    ]
    commit('SET', fake)
  },
}
