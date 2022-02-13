import { CardType, Color, MtgCard } from './card'

export type Constraint = (card: MtgCard) => boolean

export const colorIs = (color: Color) => (card: MtgCard) => card.colors.includes(color)

export const notType = (cardType: CardType) => (card: MtgCard) => card.type !== cardType

export const and = (constraints: Constraint[]) => (card: MtgCard) => constraints.reduce((result: boolean, constraint: Constraint) => result && constraint(card), true)
