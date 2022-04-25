import {
  InvalidQuantityError,
  addBag,
  addItem,
  hasBag,
  hasItem,
  removeBag,
  removeItem,
} from './inventory'

describe('inventory', () => {
  describe('addItem', () => {
    it('Should able to add an item', () => {
      expect(addItem({}, 1, 100)).toEqual({ 1: 100 })
      expect(addItem({ 1: 100 }, 1, 100)).toEqual({ 1: 200 })
      expect(() => addItem({ 1: 100 }, 1, 0)).toThrowError(
        new InvalidQuantityError()
      )
      expect(addItem({ 1: 100 }, 2, 1)).toEqual({ 1: 100, 2: 1 })
      expect(() => addItem({ 1: 100 }, 1, -100)).toThrowError(
        new InvalidQuantityError()
      )
    })
  })

  describe('addBag', () => {
    it('Should able to add multiple items', () => {
      expect(addBag({}, { 1: 100 })).toEqual({ 1: 100 })
      expect(addBag({ 1: 100 }, { 1: 100 })).toEqual({ 1: 200 })
      expect(addBag({ 1: 100 }, { 2: 100 })).toEqual({ 1: 100, 2: 100 })
      expect(addBag({ 1: 100, 2: 100 }, { 3: 100 })).toEqual({
        1: 100,
        2: 100,
        3: 100,
      })
      expect(() => addBag({ 1: 100 }, { 3: -100 })).toThrowError(
        new InvalidQuantityError()
      )
    })
  })

  describe('hasItem', () => {
    it('Should return false if inventory has less than the required quantity', () => {
      expect(hasItem({}, 1, 100)).toEqual(false)
      expect(hasItem({ 1: 10 }, 1, 100)).toEqual(false)
      expect(hasItem({ 1: 100, 2: 10 }, 2, 11)).toEqual(false)
    })
    it('Should return true if inventory has no less than the required quantity', () => {
      expect(hasItem({ 1: 100 }, 1, 100)).toEqual(true)
      expect(hasItem({ 1: 100, 2: 10 }, 1, 100)).toEqual(true)
      expect(hasItem({ 1: 100, 2: 10 }, 2, 10)).toEqual(true)
      expect(hasItem({ 1: 100, 2: 10 }, 2, 9)).toEqual(true)
    })
  })

  describe('hasBag', () => {
    it('Should return false if inventory can not fullfil all requirements', () => {
      expect(hasBag({}, { 1: 100 })).toEqual(false)
      expect(hasBag({ 2: 100 }, { 1: 100 })).toEqual(false)
      expect(hasBag({ 2: 100 }, { 1: 100, 2: 100 })).toEqual(false)
      expect(hasBag({ 2: 100 }, { 1: 100, 2: 1 })).toEqual(false)
      expect(hasBag({ 1: 100, 2: 100 }, { 1: 100, 2: 101 })).toEqual(false)
    })
    it('Should return true if inventory can fullfil all requirements', () => {
      expect(hasBag({ 1: 100 }, { 1: 100 })).toEqual(true)
      expect(hasBag({ 1: 100, 2: 100 }, { 1: 100, 2: 100 })).toEqual(true)
      expect(
        hasBag({ 1: 100, 2: 100, 3: 1, 4: 5 }, { 1: 100, 2: 100 })
      ).toEqual(true)
    })
  })

  describe('removeItem', () => {
    it('Should able to remove items', () => {
      expect(() => removeItem({ 1: 100 }, 1, -100)).toThrowError(
        new InvalidQuantityError()
      )
      expect(() => removeItem({ 1: 1 }, 1, 100)).toThrowError(
        new InvalidQuantityError()
      )
      expect(() => removeItem({ 1: 100 }, 2, 100)).toThrowError(
        new InvalidQuantityError()
      )
      expect(removeItem({ 1: 100 }, 1, 10)).toEqual({ 1: 90 })
      expect(removeItem({ 1: 100, 2: 10 }, 1, 10)).toEqual({ 1: 90, 2: 10 })
    })

    it('Should not keep zero quantity', () => {
      expect(removeItem({ 1: 100, 2: 10 }, 2, 10)).toEqual({ 1: 100 })
      expect(removeItem({ 1: 100 }, 1, 100)).toEqual({})
    })
  })

  describe('removeBag', () => {
    it('Should remove all items in the bag', () => {
      expect(removeBag({ 1: 100 }, { 1: 100 })).toEqual({})
      expect(removeBag({ 1: 100, 2: 100 }, { 1: 100, 2: 100 })).toEqual({})
      expect(removeBag({ 1: 110, 2: 100 }, { 1: 100, 2: 100 })).toEqual({
        1: 10,
      })
      expect(removeBag({ 1: 110, 2: 200 }, { 1: 100, 2: 100 })).toEqual({
        1: 10,
        2: 100,
      })
      expect(removeBag({ 1: 100, 2: 200 }, { 1: 100, 2: 100 })).toEqual({
        2: 100,
      })
    })
    it('Should throw an Error if it could not satisfy the requirements', () => {
      expect(() => removeBag({}, { 1: 100 })).toThrow(
        new InvalidQuantityError()
      )
      expect(() => removeBag({ 1: 100 }, { 1: 101 })).toThrow(
        new InvalidQuantityError()
      )
      expect(() => removeBag({ 1: 100, 2: 100 }, { 2: 201 })).toThrow(
        new InvalidQuantityError()
      )
    })
  })
})
