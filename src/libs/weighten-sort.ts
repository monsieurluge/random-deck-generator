export type WeightedItem<T> = { item: T, weight: number }

export const addRandomWeight = <T>(item: T): WeightedItem<T> => ({ item, weight: Math.random() })

export const heavierLast = <T>(a: WeightedItem<T>, b: WeightedItem<T>) => a.weight - b.weight

export const extractItem = <T>(weightenItem: WeightedItem<T>) => weightenItem.item
