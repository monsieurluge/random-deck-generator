import { Generator } from '../../generator'
import { Plain } from './basic-land'
import { MtgCard } from './card'
import { and, colorIs, Constraint, notType } from './constraints'
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
        const expected = 40
        const deck: MtgCard[] = basicPlains(16)
        const constraints: Constraint = and([
            colorIs('white'),
            notType('land'),
        ])
        while (deck.length < expected) {
            deck.push(collection.pick(constraints))
        }
        return deck.map(card => card.name)
    }

    return Object.freeze({
        generate,
    })
}
