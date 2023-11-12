import { CardCollection } from '@generator/card-collection'
import { Deck } from '@generator/deck'
import { Constraint } from '@libs/constraint'
import { Forest, Island, Mountain, Plains, Swamp } from '../card/basic-land'
import { MtgCard } from '../card/card'

export function DumbLimitedDeck(collection: CardCollection<MtgCard>): Deck<MtgCard> {
    const size = 40
    const cards: MtgCard[] = []

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

    function add(card: MtgCard): void {
        expectDeckIsNotFull()
        expectMaxOccurencesNotReached(card)
        cards.push(card)
    }

    function expectMaxOccurencesNotReached(card: MtgCard): void {
        if (card.type === 'basic land') {
            return
        }
        if (occurrences(card) === 4) {
            throw new Error(`there is already 4 cards in the deck: "${card.name}`)
        }
    }

    function expectDeckIsNotFull(): void {
        if (cards.length === size) {
            throw new Error(`the deck is full (${size} cards)`)
        }
    }

    function generate(): void {
        while (cards.length < 16) {
            add(randomBasicLand())
        }
        while (cards.length < size) {
            add(collection.pick(noConstraint))
        }
    }

    function list(): MtgCard[] {
        if (cards.length === 0) {
            generate()
        }
        return cards
    }

    function occurrences(target: MtgCard): number {
        return cards.filter(card => card.name === target.name).length
    }

    return Object.freeze({
        list,
    })
}
