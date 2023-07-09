import { Deck } from '_plugins/deck'
import { MtgCard } from '../card/card'

export function MtgDeck(size: number): Deck<MtgCard> {
    const cards: MtgCard[] = []

    function add(card: MtgCard): void {
        expectDeckIsNotFull()
        expectMaxOccurencesNotReached(card)
        cards.push(card)
    }

    function addMany(total: number, card: MtgCard): void {
        for (let i = 0; i < total; i++) {
            add(card)
        }
    }

    function count(): number {
        return cards.length
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

    function list(): MtgCard[] {
        return cards
    }

    function occurrences(target: MtgCard): number {
        return cards.filter(card => card.name === target.name).length
    }

    return Object.freeze({
        add,
        addMany,
        count,
        list,
    })
}
