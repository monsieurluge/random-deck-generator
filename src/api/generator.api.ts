import { Deck } from '_plugins/deck-generator'

export interface GeneratorApi<T> {
    generate(): Deck<T>
}
