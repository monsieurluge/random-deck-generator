import { CardCollection } from '../../../generator/collection'
import { MtgCardCollection } from '../card-collection'
import { CardPool } from '../card-pool'
import { MtgCard } from '../card/card'
import { rarityIs } from '../constraints'

/**
 * cards distribution in a set (https://cardgamebase.com/mtg-set-booster-contents)
 * each card is unique, no duplicate
 */
export function DraftBooster(collection: CardCollection<MtgCard>) {
    let opened = false

    function open(): CardCollection<MtgCard> {
        if (opened) {
            throw Error('sorry but this MTG draft booster has already been opened')
        }
        const pools: CardPool[] = [
            ...welcomeCards(collection),
            ...fireworksCards(collection),
            ...fireworks2Cards(collection),
            ...bigFinishCards(collection),
            ...bigFinish2Cards(collection),
        ].map(card => ({ card, total: 1 }))
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
            collection.pick(rarityIs('common')),
            collection.pick(rarityIs('common')),
            collection.pick(rarityIs('common')),
            collection.pick(rarityIs('common')),
            collection.pick(rarityIs('uncommon')),
            collection.pick(rarityIs('uncommon')),
        ]
    }

    /**
     * "fireworks 1" distribution
     *  - 50% 1C
     *  - 50% 1U
     */
    function fireworksCards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            collection.pick(rarityIs('common')),
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
            collection.pick(rarityIs('common')),
            collection.pick(rarityIs('rare')),
        ]
    }

    /**
     * "big finish 1" distribution
     *  - 86,5% R
     *  - 13,5% MR
     */
    function bigFinishCards(collection: CardCollection<MtgCard>): MtgCard[] {
        return [
            collection.pick(rarityIs('rare')),
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
            collection.pick(rarityIs('uncommon')),
        ]
    }

    return Object.freeze({
        open,
    })
}
