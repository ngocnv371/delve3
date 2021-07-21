import { dungeons as dungeonsData } from '@utils/data-loader'

export const state = {
  items: [],
}

export const mutations = {
  SET(state, value) {
    state.items = value
  },
}

export const getters = {
  availableDungeons(state) {
    return state.items.map((i) => dungeonsData.find((d) => d.id === i.id))
  },
}

export const actions = {
  init({ state, commit }) {
    // load
    const fake = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    commit('SET', fake)
  },
}
