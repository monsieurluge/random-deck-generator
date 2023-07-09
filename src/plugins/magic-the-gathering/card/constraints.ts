import { Constraint } from '_libs/constraint'
import { MtgCard } from './card'
import { CardType } from './card-type'
import { Color } from './color'

export type MtgConstraint = Constraint<MtgCard>

export const colorIs = (color: Color) => (card: MtgCard) => card.colors.every(cardColor => cardColor === color)

export const ofType = (cardType: CardType) => (card: MtgCard) => card.type === cardType
