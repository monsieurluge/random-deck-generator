import { CardCollection } from '../../generator/collection'
import { MtgCard } from './card/card'

export interface Booster {
    open(): CardCollection<MtgCard>
}
