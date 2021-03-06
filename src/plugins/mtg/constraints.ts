import { MtgCard } from './card/card'
import { CardType } from './card/card-type'
import { Color } from './card/color'

export type Constraint = (card: MtgCard) => boolean

export const and = (constraints: Constraint[]) => (card: MtgCard) => constraints.reduce((result: boolean, constraint: Constraint) => result && constraint(card), true)

export const colorIs = (color: Color) => (card: MtgCard) => card.colors.every(cardColor => cardColor === color)

export const ofType = (cardType: CardType) => (card: MtgCard) => card.type === cardType

export const not = (constraint: Constraint) => (card: MtgCard) => !constraint(card)
