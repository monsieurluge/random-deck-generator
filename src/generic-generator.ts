import { CardCollection } from './card-collection'
import { Generator } from './generator'

type WeightedItem<T> = { item: T, weight: number }

const addRandomWeight = <T>(item: T): WeightedItem<T> => ({ item, weight: Math.random() })

const heavierLast = <T>(a: WeightedItem<T>, b: WeightedItem<T>) => a.weight - b.weight

const extractItem = <T>(weightenItem: WeightedItem<T>) => weightenItem.item

export function GenericGenerator(collection: CardCollection): Generator {
    function generate() {
        return collection
            .cards()
            .map(addRandomWeight)
            .sort(heavierLast)
            .map(extractItem)
    }

    return Object.freeze({
        generate,
    })
}
