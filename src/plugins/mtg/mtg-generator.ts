import { Generator } from '../../generator'
import { Plain } from './basic-land'
import { CardOccurrence } from './card-occurrence'
import { and, colorIs, Constraint, not, ofType } from './constraints'
import { Deck } from './deck'
import { CardCollection } from './mtg-card-collection'

export function MtgGenerator(collection: CardCollection): Generator {
    const whiteCardNotLand: Constraint = and([
        colorIs('white'),
        not(ofType('land')),
    ])

    function generate(): string[] {
        const size = 40
        const deck = Deck(size)
        deck.addMany(16, Plain)
        while (deck.count() < size) {
            deck.add(collection.pick(whiteCardNotLand))
        }
        return deck
            .list()
            .map((occurrence: CardOccurrence) => `${occurrence.total} __ ${occurrence.card.name}`)
    }

    return Object.freeze({
        generate,
    })
}
