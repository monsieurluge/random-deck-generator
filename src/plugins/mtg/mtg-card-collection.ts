import { CardCollection } from '../../card-collection'
import { CardPool } from './card'

export function MtgCardCollection(pools: CardPool[]): CardCollection {
    function cards() {
        return pools.map(pool => pool.card.name)
    }

    return Object.freeze({ cards })
}
