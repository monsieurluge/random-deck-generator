import { Deck } from './deck'

export interface Generator <T> {
    generate(): Deck<T>
}
