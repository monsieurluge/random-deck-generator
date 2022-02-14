import { MtgCard } from './card'

export function Deck(max: number) {
    const cards: MtgCard[] = []

    function add(card: MtgCard): void {
        expectDeckIsNotFull()
        expectMaxOccurencesNotReached(card)
        cards.push(card)
    }

    function count(): number {
        return cards.length
    }

    function expectMaxOccurencesNotReached(card: MtgCard): void {
        if (card.type === 'basic land') {
            return
        }
        if (occurrences(card.name) === 4) {
            throw new Error(`there is already 4 cards in the deck: "${card.name}`)
        }
    }

    function expectDeckIsNotFull(): void {
        if (cards.length === max) {
            throw new Error(`the deck is full (${max} cards)`)
        }
    }

    function list(): MtgCard[] {
        return cards
    }

    function occurrences(name: string): number {
        return cards.filter(card => card.name === name).length
    }

    return Object.freeze({
        add,
        count,
        list,
    })
}
