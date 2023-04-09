import { Deck } from '../../generator/deck'

export interface GeneratorApi<T> {
    generate(): Promise<Deck<T>>
}
