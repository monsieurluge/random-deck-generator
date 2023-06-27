export interface Deck <T> {
    add(card: T): void
    addMany(total: number, card: T): void
    count(): number
    list(): T[]
}

export interface Card {
    name(): string
}

export interface Generator <T> {
    generate(): Deck<T>
}
