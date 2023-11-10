import { CardCollection } from './card-collection'
import { Deck } from './deck'

export interface DeckGenerator <T> {
    deckFrom(collection: CardCollection<T>): Deck<T>
}
