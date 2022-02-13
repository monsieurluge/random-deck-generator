export type Rarity =
    'common'
    | 'uncommon'
    | 'rare'
    | 'mythic'

export type CardType =
    'artifact'
    | 'creature'
    | 'instant'
    | 'sorcery'
    | 'creature'
    | 'enchantmnet'
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
}

export interface Card {
    name: string
    rarity: Rarity
    type: CardType
    subtypes: string[]
    colors: Color[]
    cost: ManaCost
}
