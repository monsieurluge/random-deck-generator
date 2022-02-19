import { CardPool, MtgCard } from './card'
import { Constraint } from './constraints'

export interface CardCollection {
    pick(constraint: Constraint): MtgCard
}

export function MtgCardCollection(pools: CardPool[]): CardCollection {
    function pick(constraint: Constraint): MtgCard {
        const filteredPools: CardPool[] = pools.filter((pool: CardPool) => constraint(pool.card))
        if (filteredPools.length === 0) {
            throw Error('there is no card in the pool for this constraint')
        }
        const randomCardId = Math.floor(Math.random() * filteredPools.length)
        const card = filteredPools[randomCardId].card
        return card
    }

    return Object.freeze({
        pick,
    })
}
