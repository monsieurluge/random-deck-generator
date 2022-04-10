import { CardPool } from '../plugins/mtg/card-pool'
import { Constraint } from '../plugins/mtg/constraints'

export interface CardCollection<T> {
    pick(id: string): T
    remaining(): number
    search(constraint: Constraint): CardPool<T>[]
}
