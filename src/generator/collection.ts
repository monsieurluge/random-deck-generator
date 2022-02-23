import { Constraint } from '../plugins/mtg/constraints'

export interface CardCollection<T> {
    pick(constraint: Constraint): T
}
