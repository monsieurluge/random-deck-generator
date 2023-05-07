import { Constraint } from '../../../collection/constraint'
import { MtgCard } from '../card/card'
import { CardType } from '../card/card-type'
import { Color } from '../card/color'

export type MtgConstraint = Constraint<MtgCard>

export const colorIs = (color: Color) => (card: MtgCard) => card.colors.every(cardColor => cardColor === color)

export const ofType = (cardType: CardType) => (card: MtgCard) => card.type === cardType
