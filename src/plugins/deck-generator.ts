import { Deck } from './deck'

export interface DeckGenerator <T> {
    generate(): Deck<T>
}
