import { CardCollection } from '../../card-collection'
import { Card } from './card'

export function MtgCardCollection(collection: Card[]): CardCollection {
    function cards() {
        return collection.map(card => card.name)
    }

    return Object.freeze({ cards })
}
