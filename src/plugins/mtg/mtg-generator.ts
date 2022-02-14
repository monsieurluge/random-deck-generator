import { Generator } from '../../generator'
import { Plain } from './basic-land'
import { MtgCard } from './card'
import { and, colorIs, Constraint, notType } from './constraints'
import { Deck } from './deck'
import { CardCollection } from './mtg-card-collection'

export function MtgGenerator(collection: CardCollection): Generator {
    function basicPlains(total: number): MtgCard[] {
        const lands: MtgCard[] = []
        for (let i = 1; i < total; i++) {
            lands.push(Plain)
        }
        return lands
    }

    function generate(): string[] {
        const size = 40
        const deck = Deck(size)
        basicPlains(16).forEach(deck.add)
        const whiteCardNotLand: Constraint = and([
            colorIs('white'),
            notType('land'),
        ])
        while (deck.count() < size) {
            deck.add(collection.pick(whiteCardNotLand))
        }
        return deck.list().map(card => card.name)
    }

    return Object.freeze({
        generate,
    })
}
