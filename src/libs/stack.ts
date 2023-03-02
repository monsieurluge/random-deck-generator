export type CheckIdentityMethod<T> = (item1: T, item2: T) => Boolean

export interface Stack<T> {
    item: T
    occurrences: Number
}

export const stackItems = <T>(isSameItem: CheckIdentityMethod<T>) =>
    (stacks: Stack<T>[], next: T): Stack<T>[] => {
        const allButLast = stacks.slice(0, stacks.length - 1)
        const lastStack = (stacks.length === 0)
            ? { item: next, occurrences: 0 }
            : stacks.slice(-1)[0]
        return (isSameItem(lastStack.item, next))
            ? [...allButLast, { item: next, occurrences: lastStack.occurrences.valueOf() + 1 }]
            : [...allButLast, lastStack, { item: next, occurrences: 1 }]
    }
