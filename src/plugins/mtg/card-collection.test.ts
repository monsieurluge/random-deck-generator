import tape from 'tape'
import { MtgCardCollection } from './card-collection'
import { MtgCard } from './card/card'
import { CardType } from './card/card-type'
import { Rarity } from './card/rarity'

function createMtgCard({
    id = 'foo',
    name = 'Foo',
    rarity = 'common' as Rarity,
    type = 'creature' as CardType,
    subtypes = [],
    colors = [],
    cost = [],
} = {}): MtgCard {
    return { id, name, rarity, type, subtypes, colors, cost }
}

tape(
    'requesting a card when the collection is empty',
    (test) => {
        // GIVEN
        const emptyCollection = MtgCardCollection([])
        // THEN
        test.throws(() => emptyCollection.card('foo'), 'is not allowed')
        test.end()
    },
)

tape(
    'requesting a card from a collection',
    (test) => {
        // GIVEN
        const collection = MtgCardCollection([
            {
                card: createMtgCard({ id: 'foo' }),
                total: 3,
            },
            {
                card: createMtgCard({ id: 'bar' }),
                total: 1,
            },
        ])
        // WHEN
        const foo = collection.card('foo')
        // THEN
        test.equal('foo', foo.id, 'returns that card data')
        test.end()
    },
)

tape(
    'pick one card from an empty collection',
    (test) => {
        // GIVEN
        const emptyCollection = MtgCardCollection([])
        // THEN
        test.throws(() => emptyCollection.pick('foo'), 'is not allowed')
        test.end()
    },
)

tape(
    'pick the last card of a collection',
    (test) => {
        // GIVEN
        const oneCardCollection = MtgCardCollection([
            {
                card: createMtgCard({ id: 'foo' }),
                total: 1,
            },
        ])
        // WHEN
        oneCardCollection.pick('foo')
        // THEN
        test.equal(0, oneCardCollection.remaining(), 'leaves it empty')
        test.end()
    },
)
