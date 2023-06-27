import { Deck } from '../../plugins/deck-generator'

export interface GeneratorApi<T> {
    generate(): Deck<T>
}
