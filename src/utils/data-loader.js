import _dungeons from '@src/assets/data/dungeons.json'
import _items from '@src/assets/data/items.json'

export const items = _items
export const dungeons = _dungeons.map((d) => {
  function mapLoot(loot) {
    return loot.map((l) => {
      const item = _items.find((i) => i.id === l.id)
      if (!item) {
        console.error(`item ${l.id} not found`)
      }
      return {
        ...l,
        name: item.name,
      }
    })
  }
  return {
    ...d,
    loot: mapLoot(d.loot),
  }
})
