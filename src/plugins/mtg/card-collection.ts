import { CardCollection } from '../../generator/collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { Constraint } from './constraints'

export function MtgCardCollection(pools: CardPool<MtgCard>[]): CardCollection<MtgCard> {
    let inCollection = pools

    function card(id: string): MtgCard {
        const found = inCollection.find(pool => pool.card.id === id)
        if (!found) {
            throw new Error(`the card #${id} does not exist`)
        }
        return found.card
    }

    function pick(id: string): MtgCard {
        let picked: MtgCard | undefined
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
        if (!picked) {
            throw new Error(`cannot pick the #${id} card: not found`)
        }
        return picked
    }

    function remaining(): number {
        return inCollection.reduce((total, pool) => total + pool.total, 0)
    }

    function search(constraint: Constraint): CardPool<MtgCard>[] {
        return inCollection.filter((pool: CardPool<MtgCard>) => pool.total > 0 && constraint(pool.card))
    }

    return Object.freeze({
        card,
        pick,
        remaining,
        search,
    })
}
