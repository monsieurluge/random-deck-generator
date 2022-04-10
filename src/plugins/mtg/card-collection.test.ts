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
    'pick one card from an empty collection',
    (test) => {
        // GIVEN
        const emptyCollection = MtgCardCollection([])
        // WHEN
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
