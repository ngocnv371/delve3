declare namespace Delve {
  interface IdentifiedBy<T> {
    id: T
    name: string
    description: string
  }

  interface Leveled {
    level: number
  }

  interface BaseItem extends IdentifiedBy<string>, Leveled {}

  interface LootItem extends BaseItem {
    min: number
    max: number
  }

  interface Dungeon extends IdentifiedBy<string>, Leveled {
    loot: LootItem[]
  }

  const items: BaseItem[]
  const dungeons: Dungeon[]
}
export = Delve
