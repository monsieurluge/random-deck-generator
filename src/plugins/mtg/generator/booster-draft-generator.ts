import { Deck } from '../../../generator/deck'
import { Generator } from '../../../generator/generator'
import { CardCollection } from '../card-collection'
import { Plains } from '../card/basic-land'
import { MtgCard } from '../card/card'
import { and, colorIs, Constraint, not, ofType } from '../constraints'
import { MtgDeck } from '../deck'

/**
 * simulates a 8 player draft, with set boosters
 * cards distribution in a set (https://cardgamebase.com/mtg-set-booster-contents):
 * welcome
 *   - 35% 5C, 1U
 *   - 40% 4C, 2U
 *   - 12.5% 3C, 3U
 *   - 7% 2C, 4U
 *   - 3.5% 1C, 5U
 *   - 2% 6U
 * fireworks 1
 *   - 50% 1C
 *   - 50% 1U
 * fireworks 2
 *   - 49% 2C
 *   - 24.5% 1C, 1U
 *   - 17.5% 1C, 1R / MR
 *   - 3.1% 2U
 *   - 4.3% 1U, 1R / MR
 *   - 1,6% 2R / MR
 * big finish 1
 *   - 86,5% R
 *   - 13,5% MR
 * big finish 2
 *   - 71,4% C
 *   - 21,4% U
 *   - 6,2% R
 *   - 1,0% MR
 */
export function BoosterDraftGenerator(collection: CardCollection): Generator<MtgCard> {
    const whiteCardNotLand: Constraint = and([
        colorIs('white'),
        not(ofType('land')),
    ])

    function generate(): Deck<MtgCard> {
        const size = 40
        const deck = MtgDeck(size)
        deck.addMany(16, Plains)
        while (deck.count() < size) {
            deck.add(collection.pick(whiteCardNotLand))
        }
        return deck
    }

    return Object.freeze({
        generate,
    })
}
