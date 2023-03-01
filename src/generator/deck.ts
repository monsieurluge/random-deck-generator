import { CardOccurrence } from './card-occurrence'

export interface Deck <T> {
    add(card: T): void
    addMany(total: number, card: T): void
    count(): number
    list(): CardOccurrence<T>[]
}
