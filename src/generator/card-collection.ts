import { Constraint } from '@libs/constraint'

export type CardCollection<T> = {
    pick(constraint: Constraint<T>): T
}
