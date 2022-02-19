import { MtgCard } from './card'

export type CardOccurrence = {
    card: MtgCard
    total: number
}

export function Deck(max: number) {
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
        if (cards.length === max) {
            throw new Error(`the deck is full (${max} cards)`)
        }
    }

    function list(): CardOccurrence[] {
        const rawList: { name: string, occurrences: CardOccurrence }[] = []
        cards.forEach(card => {
            if (rawList.find(item => item.name === card.name)) {
                return
            }
            rawList.push({
                name: card.name,
                occurrences: {
                    card,
                    total: occurrences(card),
                },
            })
        })
        return rawList.map(item => item.occurrences)
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
