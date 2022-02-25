import { CardCollection } from '../../../generator/collection'
import { Deck } from '../../../generator/deck'
import { Generator } from '../../../generator/generator'
import { Plain } from '../card/basic-land'
import { MtgCard } from '../card/card'
import { firstEncountered } from '../constraints'
import { MtgDeck } from '../deck'
import { DraftBooster } from './booster'

// simulates a 8 player draft, with set boosters
export function BoosterDraftGenerator(collection: CardCollection<MtgCard>): Generator<MtgCard> {
    function generate(): Deck<MtgCard> {
        const size = 40
        const deck = MtgDeck(size)
        deck.addMany(16, Plain)
        const openedBooster1 = DraftBooster(collection).open()
        const openedBooster2 = DraftBooster(collection).open()
        while (deck.count() < size && openedBooster1.remaining() > 0) {
            deck.add(openedBooster1.pick(firstEncountered))
        }
        while (deck.count() < size && openedBooster2.remaining() > 0) {
            deck.add(openedBooster2.pick(firstEncountered))
        }
        return deck
    }

    return Object.freeze({
        generate,
    })
}
