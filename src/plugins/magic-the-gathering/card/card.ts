import { CardType } from './card-type'
import { Color } from './color'
import { Rarity } from './rarity'

export interface MtgCard {
    colors: Color[]
    convertedManaCost: Number
    cost: String
    name: string
    rarity: Rarity
    subtypes: string[]
    type: CardType
}
