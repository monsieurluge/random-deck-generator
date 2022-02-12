import { CardCollection } from './card-collection'
import collection from './cards-collections/mtg - forgotten realms.json'

export function MtgCardCollection(): CardCollection {
    function cards() {
        return collection
            .cards
            .map(card => card.name)
    }

    return Object.freeze({ cards })
}
