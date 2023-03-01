export interface Deck <T> {
    add(card: T): void
    addMany(total: number, card: T): void
    count(): number
    list(): T[]
}
