import * as expeditionsModule from './expeditions'

describe('@state/modules/expeditions', () => {
  it('exports a valid Vuex module', () => {
    expect(expeditionsModule).toBeAVuexModule()
  })
})
