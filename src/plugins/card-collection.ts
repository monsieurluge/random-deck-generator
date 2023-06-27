import { Constraint } from '../libs/constraint'

export interface CardCollection<T> {
    pick(constraint: Constraint<T>): T
}
