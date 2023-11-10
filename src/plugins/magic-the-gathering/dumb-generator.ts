import { CardCollection } from '@generator/card-collection'
import { Deck } from '@generator/deck'
import { DeckGenerator } from '@generator/deck-generator'
import { Constraint } from '@libs/constraint'
import { Forest, Island, Mountain, Plains, Swamp } from './card/basic-land'
import { MtgCard } from './card/card'
import { MtgDeck } from './deck'

export function DumbGenerator(): DeckGenerator<MtgCard> {
    const basicLands = [
        Forest,
        Island,
        Mountain,
        Plains,
        Swamp,
    ]

    const noConstraint: Constraint<MtgCard> = () => true

    const randomBasicLand = (): MtgCard => {
        const whichOne = Math.floor(Math.random() * basicLands.length)
        return basicLands[whichOne]
    }

    function deckFrom(collection: CardCollection<MtgCard>): Deck<MtgCard> {
        const size = 40
        const deck = MtgDeck(size)
        while (deck.count() < 16) {
            deck.add(randomBasicLand())
        }
        while (deck.count() < size) {
            deck.add(collection.pick(noConstraint))
        }
        return deck
    }

    return Object.freeze({
        deckFrom,
    })
}
