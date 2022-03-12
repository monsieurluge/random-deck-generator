import { Deck } from './deck'

export interface Generator <T> {
    generate(): Promise<Deck<T>>
}
