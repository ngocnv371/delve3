import { items as itemsData } from '@utils/data-loader'

export const state = {
  items: [],
}

export const getters = {
  items(state) {
    return state.items.map((i) => {
      const found = itemsData.find((d) => d.id === i.id)
      if (!found) {
        throw new Error(`item #${i.id} not found`)
      }
      return {
        ...found,
        quantity: i.quantity,
      }
    })
  },
}

export const mutations = {
  ADD_ITEM(state, payload) {
    const { id, quantity } = payload
    const index = state.items.findIndex((i) => i.id === id)
    if (index >= 0) {
      state.items[index].quantity += quantity
      if (state.items[index].quantity <= 0) {
        state.items.splice(index, 1)
      }
    } else {
      state.items.push({ id, quantity })
    }
  },
}

export const actions = {
  addLoot(context, payload) {
    payload.forEach((t) => context.commit('ADD_ITEM', t))
  },
}
