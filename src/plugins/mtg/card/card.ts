import { CardType } from './card-type'
import { Color } from './color'
import { Rarity } from './rarity'

export interface MtgCard {
    name: string
    rarity: Rarity
    type: CardType
    subtypes: string[]
    colors: Color[]
    cost: String
}
