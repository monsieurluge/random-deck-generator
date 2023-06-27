export type Constraint<T> = (item: T) => boolean

export const and = <T>(constraints: Constraint<T>[]) => (item: T) => constraints.reduce(
    (result: boolean, constraint: Constraint<T>) => result && constraint(item),
    true,
)

export const not = <T>(constraint: Constraint<T>) => (item: T) => !constraint(item)
