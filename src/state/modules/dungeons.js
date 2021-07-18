export const state = {
  dungeons: [],
}

export const mutations = {
  SET(state, value) {
    state.dungeons = value
  },
}

export const getters = {}

export const actions = {
  init({ state, commit }) {
    // load
    const fake = [
      { id: 1, level: 1, name: 'Green Bushes' },
      { id: 2, level: 2, name: 'Shallow Cave' },
      { id: 3, level: 3, name: 'Damp Cave' },
      { id: 4, level: 4, name: 'Dark Cave' },
    ]
    commit('SET', fake)
  },
}
