import { CardCollection } from '../../../generator/collection'
import { Booster } from '../booster'
import { Plain } from '../card/basic-land'
import { MtgCard } from '../card/card'
import { firstEncountered } from '../constraints'
import { MtgDeck } from '../deck'
import { DraftPlayer } from './draft-player'

export function DumbDraftPlayer(name: string): DraftPlayer {
    const deck = MtgDeck(40)
    let neighbor: DraftPlayer

    function changeNeighbor(player: DraftPlayer): void {
        neighbor = player
        console.log(`I'm ${name}, my new draft neighbor is ${neighbor.name}`)
    }

    async function draft(booster: Booster): Promise<void> {
        const cards = booster.open()
        deck.addMany(16, Plain)
        deck.add(cards.pick(firstEncountered))
        return Promise.resolve()
    }

    function next(_cards: CardCollection<MtgCard>): void {
        // todo
    }

    return Object.freeze({
        changeNeighbor,
        deck,
        draft,
        name,
        next,
    })
}
