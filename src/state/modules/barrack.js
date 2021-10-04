export const state = {
  parties: [],
  unassigned: [],
}

export const mutations = {
  SET(state, value) {
    state.parties = value
  },

  REMOVE_PARTY(state, { id }) {
    state.parties = state.parties.filter((p) => p.id !== id)
  },

  ADD_PARTY(state, party) {
    state.parties = [party, ...state.parties]
    if (!party.id) {
      // generate id
      let id = 10
      state.parties.forEach((e) => {
        if (e.id > id) {
          id = e.id
        }
      })
      party.id = id + 1
    }
  },

  ASSIGN_MEMBER_TO_PARTY(state, { party, index, member }) {
    const members = [...party.members]
    // if this slot is not empty, move that member back to 'unassigned'
    if (members[index]) {
      state.unassigned.push(members[index])
    }
    members[index] = member
    party.members = members
    // remove the assigned member from 'unassigned'
    if (member) {
      state.unassigned = state.unassigned.filter((m) => m.id !== member.id)
    }
  },

  REMOVE_MEMBER_FROM_PARTY(state, { party, member }) {
    const index = party.members.findIndex((m) => m && m.id === member.id)
    // empty the slot
    if (index >= 0 && index < party.members.length) {
      party.members[index] = null
    }
    // move that member to 'unassigned'
    state.unassigned.push(member)
  },

  ADD_UNASSIGNED(state, one) {
    state.unassigned.push(one)
  },

  REMOVE_UNASSIGNED(state, one) {
    state.unassigned = state.unassigned.filter((m) => m.id !== one.id)
  },

  RENAME_PARTY(state, { id, name }) {
    const p = state.parties.find((d) => d.id === id)
    if (p) {
      p.name = name
    }
    state.parties = [...state.parties]
  },

  SET_EXPEDITION(state, { partyId, expeditionId }) {
    const p = state.parties.find((d) => d.id === partyId)
    if (p) {
      p.expeditionId = expeditionId
    }
    state.parties = [...state.parties]
  },
}

export const getters = {
  availableParties(state) {
    return state.parties.filter((p) => !p.expeditionId)
  },
}

export const actions = {
  init({ state, commit }) {
    // load
    const fake = [
      {
        id: 1,
        name: 'Main party',
        members: [
          { id: 11, name: 'Jenny Kai', level: 1, class: 'knight' },
          { id: 12, name: 'Betty Kai', level: 2, class: 'summoner' },
          { id: 13, name: 'Desh Kai', level: 3, class: 'mage' },
          { id: 14, name: 'Hoak Kai', level: 1, class: 'thief' },
          { id: 15, name: 'Bok Kai', level: 1, class: 'knight' },
        ],
      },
    ]
    commit('SET', fake)
    const un1 = { id: 16, name: 'Back Jon', level: 5, class: 'mage' }
    const un2 = { id: 17, name: 'Holy Ko', level: 5, class: 'summoner' }
    const un3 = { id: 18, name: 'Ben Jin', level: 4, class: 'knight' }
    commit('ADD_UNASSIGNED', un1)
    commit('ADD_UNASSIGNED', un2)
    commit('ADD_UNASSIGNED', un3)
  },
  clearExpedition(context, partyId) {
    context.commit('SET_EXPEDITION', { partyId, expeditionId: null })
  },
}
