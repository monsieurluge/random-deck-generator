import { Deck } from '../../../generator/deck'
import { Generator } from '../../../generator/generator'
import { CardCollection } from '../card-collection'
import { Plain } from '../card/basic-land'
import { MtgCard } from '../card/card'
import { and, colorIs, Constraint, not, ofType } from '../constraints'
import { MtgDeck } from '../deck'

export function BoosterDraftGenerator(collection: CardCollection): Generator<MtgCard> {
    const whiteCardNotLand: Constraint = and([
        colorIs('white'),
        not(ofType('land')),
    ])

    function generate(): Deck<MtgCard> {
        const size = 40
        const deck = MtgDeck(size)
        deck.addMany(16, Plain)
        while (deck.count() < size) {
            deck.add(collection.pick(whiteCardNotLand))
        }
        return deck
    }

    return Object.freeze({
        generate,
    })
}
