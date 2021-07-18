import * as tavernModule from './tavern'

describe('@state/modules/tavern', () => {
  it('exports a valid Vuex module', () => {
    expect(tavernModule).toBeAVuexModule()
  })
})
