import { Constraint } from './constraint'

export interface CardCollection<T> {
    pick(constraint: Constraint<T>): T
}
