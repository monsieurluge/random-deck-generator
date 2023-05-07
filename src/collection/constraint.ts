export type Constraint<T> = (card: T) => boolean

export const and = <T>(constraints: Constraint<T>[]) => (card: T) => constraints.reduce(
    (result: boolean, constraint: Constraint<T>) => result && constraint(card),
    true,
)

export const not = <T>(constraint: Constraint<T>) => (card: T) => !constraint(card)
