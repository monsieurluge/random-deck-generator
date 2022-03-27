import { CardCollection } from '../../generator/collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { Constraint } from './constraints'

export function MtgCardCollection(pools: CardPool<MtgCard>[]): CardCollection<MtgCard> {
    let inCollection = pools

    function pick(id: string): MtgCard {
        let picked: MtgCard
        inCollection = inCollection.map(pool => {
            if (pool.card.id === id) {
                if (pool.total === 0) {
                    throw new Error(`cannot pick the #${id} card: 0 in pool`)
                }
                picked = pool.card
                return {
                    card: pool.card,
                    total: pool.total - 1,
                }
            }
            return pool
        })
        return picked
    }

    function search(constraint: Constraint): CardPool<MtgCard>[] {
        return inCollection.filter((pool: CardPool<MtgCard>) => pool.total > 0 && constraint(pool.card))
    }

    return Object.freeze({
        pick,
        search,
    })
}
