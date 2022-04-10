import tape from 'tape'
import { MtgCardCollection } from './card-collection'
import { CardPool } from './card-pool'
import { MtgCard } from './card/card'
import { CardType } from './card/card-type'
import { Rarity } from './card/rarity'

function createMtgCardPool(
    total: number = 1, {
        id = 'foo',
        name = 'Foo',
        rarity = 'common' as Rarity,
        type = 'creature' as CardType,
        subtypes = [],
        colors = [],
        cost = [],
    } = {},
): CardPool<MtgCard> {
    return {
        card: { id, name, rarity, type, subtypes, colors, cost },
        total,
    }
}

tape('requesting a card when the collection is empty', (test) => {
    // GIVEN
    const emptyCollection = MtgCardCollection([])
    // THEN
    test.throws(() => emptyCollection.card('foo'), 'is not allowed')
    test.end()
})

tape('requesting a card from a collection', (test) => {
    // GIVEN
    const collection = MtgCardCollection([
        createMtgCardPool(3, { id: 'foo' }),
        createMtgCardPool(1, { id: 'bar' }),
    ])
    // WHEN
    const foo = collection.card('foo')
    // THEN
    test.equal('foo', foo.id, 'returns that card data')
    test.end()
})

tape('pick one card from an empty collection', (test) => {
    // GIVEN
    const emptyCollection = MtgCardCollection([])
    // THEN
    test.throws(() => emptyCollection.pick('foo'), 'is not allowed')
    test.end()
})

tape('pick the last card of a collection', (test) => {
    // GIVEN
    const oneCardCollection = MtgCardCollection([
        createMtgCardPool(1, { id: 'foo' }),
    ])
    // WHEN
    const emptyCollection = oneCardCollection.pick('foo')
    // THEN
    test.equal(0, emptyCollection.remaining(), 'returns an empty collection')
    test.end()
})
