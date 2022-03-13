import { CardCollection } from '../../generator/collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { Constraint } from './constraints'

export function MtgCardCollection(pools: CardPool<MtgCard>[]): CardCollection<MtgCard> {
    const inCollection = pools

    function pick(constraint: Constraint): MtgCard {
        const found: CardPool<MtgCard>[] = inCollection.filter((pool: CardPool<MtgCard>) => pool.total > 0 && constraint(pool.card))
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

    function search(constraint: Constraint): CardPool<MtgCard>[] {
        return inCollection.filter((pool: CardPool<MtgCard>) => pool.total > 0 && constraint(pool.card))
    }

    return Object.freeze({
        pick,
        remaining,
        search,
    })
}
