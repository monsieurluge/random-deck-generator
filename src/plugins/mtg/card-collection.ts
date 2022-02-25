import { CardCollection } from '../../generator/collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { Constraint } from './constraints'

export function MtgCardCollection(pools: CardPool[]): CardCollection<MtgCard> {
    const inCollection = pools

    function pick(constraint: Constraint): MtgCard {
        const found: CardPool[] = inCollection.filter((pool: CardPool) => pool.total > 0 && constraint(pool.card))
        if (found.length === 0) {
            throw Error('there is no card in the pool for this constraint')
        }
        const randomCardId = Math.floor(Math.random() * found.length)
        const card = found[randomCardId].card
        found[randomCardId].total -= 1
        return card
    }

    function remaining(): number {
        return inCollection.reduce((total, pool) => total + pool.total, 0)
    }

    return Object.freeze({
        pick,
        remaining,
    })
}
