export type SortMethod<T> = (item1: T, item2: T) => number

export const multiSort = <T>(...sortMethods: SortMethod<T>[]) =>
    (left: T, right: T): number =>
        sortMethods.reduce((result: number, sortMethod) =>
            (result === 0) ? sortMethod(left, right) : result, 0)

export const sortBy = <T, R>(take: (from: T) => R) => (left: T, right: T): number => {
    if (take(left) < take(right)) return -1
    if (take(left) > take(right)) return 1
    return 0
}
