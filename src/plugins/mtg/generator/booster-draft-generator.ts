import { CardCollection } from '../../../generator/collection'
import { Deck } from '../../../generator/deck'
import { Generator } from '../../../generator/generator'
import { MtgCard } from '../card/card'
import { DraftBooster } from '../draft/draft-booster'
import { DumbDraftPlayer } from '../draft/dumb-draft-player'

// simulates a 8 player draft, with set boosters
export function BoosterDraftGenerator(collection: CardCollection<MtgCard>): Generator<MtgCard> {
    async function generate(): Promise<Deck<MtgCard>> {
        const players = [
            DumbDraftPlayer('Tom'),
            DumbDraftPlayer('Richard'),
            DumbDraftPlayer('Michelle'),
            DumbDraftPlayer('Dana'),
            DumbDraftPlayer('Alexander'),
            DumbDraftPlayer('Emily'),
            DumbDraftPlayer('Arthur'),
            DumbDraftPlayer('Sarah'),
        ]

        players.forEach((player, index) => {
            const neighborIndex = index + 1 >= players.length ? 0 : index + 1
            player.changeNeighbor(players[neighborIndex])
        })

        await Promise.all(players.map(player => player.draft(DraftBooster(collection))))

        return players[0].deck
    }

    return Object.freeze({
        generate,
    })
}
