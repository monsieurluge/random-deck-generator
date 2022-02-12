import { Generator } from './generator'

export function GenericGenerator (): Generator {
    const temp = ['test', 'toto', 'foo', 'bar']

    const generate = () => temp
        .map((value) => ({ value, weight: Math.random() }))
        .sort((a, b) => a.weight - b.weight)
        .map(({ value }) => value)

    return Object.freeze({
        generate,
    })
}
