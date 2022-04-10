import { CardCollection } from '../../generator/collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { Constraint } from './constraints'

export function MtgCardCollection(pools: CardPool<MtgCard>[]): CardCollection<MtgCard> {
    function card(id: string): MtgCard {
        const found = pools.find(pool => pool.card.id === id)
        if (!found || found.total === 0) {
            throw new Error(`the card #${id} does not exist`)
        }
        return found.card
    }

    function pick(id: string):CardCollection<MtgCard> {
        card(id) // does the card exists ?
        const updatedPools = pools.map(({ card, total }) => {
            return card.id === id
                ? { card, total: total - 1 }
                : { card, total }
        })
        return MtgCardCollection(updatedPools)
    }

    function remaining(): number {
        return pools.reduce((total, pool) => total + pool.total, 0)
    }

    function search(constraint: Constraint): CardPool<MtgCard>[] {
        return pools.filter((pool: CardPool<MtgCard>) => pool.total > 0 && constraint(pool.card))
    }

    return Object.freeze({
        card,
        pick,
        remaining,
        search,
    })
}
