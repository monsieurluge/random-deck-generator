import { CardCollection } from '../../card-collection'
import { CardPool } from '../card-pool'
import { MtgCard } from '../card/card'
import { MtgConstraint } from '../generator/constraints'

export function MtgCardCollection(pools: CardPool[]): CardCollection<MtgCard> {
    function pick(constraint: MtgConstraint): MtgCard {
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
