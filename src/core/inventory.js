export class InvalidQuantityError extends Error {
  constructor() {
    super('Invalid quantity')
    this.name = this.constructor.name
  }
}

export class InvalidInventoryError extends Error {
  constructor() {
    super('Invalid inventory')
    this.name = this.constructor.name
  }
}

export function hasItem(inventory, id, quantity) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (quantity < 0) {
    throw new InvalidQuantityError()
  }

  return !!(inventory[id] && inventory[id] >= quantity)
}

export function hasBag(inventory, bag) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (!bag) {
    throw new InvalidQuantityError()
  }

  return !Object.keys(bag).some((k) => !hasItem(inventory, k, bag[k]))
}

export function addItem(inventory, id, quantity) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (quantity <= 0) {
    throw new InvalidQuantityError()
  }

  let newQuantity = quantity
  if (hasItem(inventory, id, 1)) {
    newQuantity = quantity + inventory[id]
  }
  return { ...inventory, [id]: newQuantity }
}

export function removeItem(inventory, id, quantity) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (quantity < 0) {
    throw new InvalidQuantityError()
  }

  if (!hasItem(inventory, id, quantity)) {
    throw new InvalidQuantityError()
  }

  const newQuantity = inventory[id] - quantity
  if (!newQuantity) {
    const newInventory = { ...inventory }
    delete newInventory[id]
    return newInventory
  }

  return { ...inventory, [id]: newQuantity }
}

export function addBag(inventory, bag) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (!bag) {
    throw new InvalidQuantityError()
  }

  let newInventory = { ...inventory }
  Object.keys(bag).forEach(
    (k) => (newInventory = addItem(newInventory, k, bag[k]))
  )
  return newInventory
}

export function removeBag(inventory, bag) {
  if (!inventory) {
    throw new InvalidInventoryError()
  }

  if (!bag) {
    throw new InvalidQuantityError()
  }

  if (!hasBag(inventory, bag)) {
    throw new InvalidQuantityError()
  }

  let newInventory = { ...inventory }
  Object.keys(bag).forEach(
    (k) => (newInventory = removeItem(newInventory, k, bag[k]))
  )
  return newInventory
}
