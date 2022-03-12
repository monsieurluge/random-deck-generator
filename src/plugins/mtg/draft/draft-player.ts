import { CardCollection } from '../../../generator/collection'
import { Deck } from '../../../generator/deck'
import { Booster } from '../booster'
import { MtgCard } from '../card/card'

export interface DraftPlayer {
    changeNeighbor(player: DraftPlayer): void,
    deck: Deck<MtgCard>,
    draft(booster: Booster): Promise<void>,
    name: string,
    next(cards: CardCollection<MtgCard>): void,
}
