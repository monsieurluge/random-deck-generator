import { CardCollection } from '../../../generator/collection'
import { MtgCardCollection } from '../card-collection'
import { CardPool } from '../card-pool'
import { MtgCard } from '../card/card'
import { Constraint, rarityIs } from '../constraints'

const atRandom = () => Math.random() > 0.5 ? 1 : -1

/**
 * cards distribution in a set (https://cardgamebase.com/mtg-set-booster-contents)
 * each card is unique, no duplicate
 */
export function DraftBooster(collection: CardCollection<MtgCard>) {
    let opened = false

    function logBoosterContent(pools: CardPool<MtgCard>[]) {
        console.log(' >> booster pack opened:')
        console.table(pools.map(pool => ({
            rarity: pool.card.rarity,
            name: pool.card.name,
            colors: pool.card.colors.join(', ') || '---',
        })))
    }

    function oneCardAtRandom(collection: CardCollection<MtgCard>, constraint: Constraint): MtgCard {
        const id: string = collection.search(constraint).sort(atRandom)[0].card.id
        return collection.pick(id)
    }

    function open(): CardCollection<MtgCard> {
        if (opened) {
            throw Error('a draft booster can only be opened once')
        }
        const pools: CardPool<MtgCard>[] = [
            ...welcomeCards(collection),
            ...fireworksCards(collection),
            ...fireworks2Cards(collection),
            ...bigFinishCards(collection),
            ...bigFinish2Cards(collection),
        ].map(card => ({ card, total: 1 }))
        logBoosterContent(pools)
        opened = true
        return MtgCardCollection(pools)
    }

    /**
     * "welcome" distribution
     *  - 40% 4C, 2U
     *  - 35% 5C, 1U
     *  - 12.5% 3C, 3U
     *  - 7% 2C, 4U
     *  - 3.5% 1C, 5U
     *  - 2% 6U
     */
    function welcomeCards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            oneCardAtRandom(collection, rarityIs('common')),
            oneCardAtRandom(collection, rarityIs('common')),
            oneCardAtRandom(collection, rarityIs('common')),
            oneCardAtRandom(collection, rarityIs('common')),
            oneCardAtRandom(collection, rarityIs('common')),
        ]
    }

    /**
     * "fireworks 1" distribution
     *  - 50% 1C
     *  - 50% 1U
     */
    function fireworksCards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            oneCardAtRandom(collection, rarityIs('common')),
        ]
    }

    /**
     * "fireworks 2" distribution
     *  - 49% 2C
     *  - 24.5% 1C, 1U
     *  - 17.5% 1C, 1R / MR
     *  - 3.1% 2U
     *  - 4.3% 1U, 1R / MR
     *  - 1,6% 2R / MR
     */
    function fireworks2Cards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            oneCardAtRandom(collection, rarityIs('common')),
            oneCardAtRandom(collection, rarityIs('rare')),
        ]
    }

    /**
     * "big finish 1" distribution
     *  - 86,5% R
     *  - 13,5% MR
     */
    function bigFinishCards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            oneCardAtRandom(collection, rarityIs('rare')),
        ]
    }

    /**
     * "big finish 2" distribution
     *  - 71,4% C
     *  - 21,4% U
     *  - 6,2% R
     *  - 1,0% MR
     */
    function bigFinish2Cards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            oneCardAtRandom(collection, rarityIs('uncommon')),
        ]
    }

    return Object.freeze({
        open,
    })
}
