import * as barrackModule from './barrack'

describe('@state/modules/barrack', () => {
  it('exports a valid Vuex module', () => {
    expect(barrackModule).toBeAVuexModule()
  })
})
