import { CardCollection } from '../../../generator/collection'
import { Booster } from '../booster'
import { CardPool } from '../card-pool'
import { Plain } from '../card/basic-land'
import { MtgCard } from '../card/card'
import { MtgDeck } from '../deck'
import { DraftPlayer } from './draft-player'

export const all = () => true

export function DumbDraftPlayer(name: string): DraftPlayer {
    const deck = MtgDeck(40)
    let neighbor: DraftPlayer

    function changeNeighbor(player: DraftPlayer): void {
        neighbor = player
        console.log(`I'm ${name}, my new draft neighbor is ${neighbor.name}`)
    }

    async function draft(booster: Booster): Promise<void> {
        const cards = booster.open()
        const found: CardPool<MtgCard>[] = cards.search(all)
        if (found.length > 0) {
            deck.add(cards.pick(found[0].card.id))
        }
        deck.addMany(16, Plain)
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
