import { dungeons } from '@/src/utils/data-loader'
import { range } from '@/src/utils/rng'

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
    const d = dungeons.find((x) => x.id === ex.dungeonId)
    if (!d) {
      return
    }
    ex.over = true
    ex.loot = d.loot.map(generateLoot)
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
    const duration = 1000
    setTimeout(() => {
      commit('COMPLETE', { id })
    }, duration)
    return id
  },
  collectExpedition(context, expedition) {
    context.commit('REMOVE', expedition.id)
    context.dispatch('barrack/clearExpedition', expedition.partyId, {
      root: true,
    })
    context.dispatch('inventory/addLoot', expedition.loot, {
      root: true,
    })
  },
}

function generateLoot(config) {
  const quantity = range(config.min, config.max)
  return { ...config, quantity }
}
