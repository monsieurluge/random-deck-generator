import { CardType } from './card-type'
import { Color } from './color'
import { ManaCost } from './mana-cost'
import { Rarity } from './rarity'

export interface MtgCard {
    id: string
    name: string
    rarity: Rarity
    type: CardType
    subtypes: string[]
    colors: Color[]
    cost: ManaCost[]
}
