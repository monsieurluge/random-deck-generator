import { Constraint } from '_libs/constraint'

export interface CardCollection<T> {
    pick(constraint: Constraint<T>): T
}
