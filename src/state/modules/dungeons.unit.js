import * as dungeonsModule from './dungeons'

describe('@state/modules/dungeons', () => {
  it('exports a valid Vuex module', () => {
    expect(dungeonsModule).toBeAVuexModule()
  })
})
