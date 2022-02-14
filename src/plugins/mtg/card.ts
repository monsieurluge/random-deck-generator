export type Rarity =
    'common'
    | 'uncommon'
    | 'rare'
    | 'mythic'

export type CardType =
    'artifact'
    | 'basic land'
    | 'creature'
    | 'instant'
    | 'sorcery'
    | 'creature'
    | 'enchantmnet'
    | 'land'
    | 'legendary artifact'
    | 'legendary creature'
    | 'legendary planeswalker'

export type Color =
    'blue'
    | 'black'
    | 'colorless'
    | 'green'
    | 'red'
    | 'white'

export interface ManaCost {
    black?: number
    blue?: number
    green?: number
    red?: number
    white?: number
    colorless?: number
    xColorless?: boolean
    nothing?: boolean
}

export interface MtgCard {
    name: string
    rarity: Rarity
    type: CardType
    subtypes: string[]
    colors: Color[]
    cost: ManaCost[]
}

export type CardPool = {
    card: MtgCard
    total: 1 | 2 | 3 | 4
}
