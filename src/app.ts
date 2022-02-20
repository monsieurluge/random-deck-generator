import collection from './cards-collections/my-mtg-collection.json'
import { HtmlUi } from './html-ui'
import { MtgCardCollection } from './plugins/mtg/card-collection'
import { CardPool } from './plugins/mtg/card-pool'
import { MtgGenerator } from './plugins/mtg/generator'

const pools: CardPool[] = collection.pools
const ui = HtmlUi(
    MtgGenerator(
        MtgCardCollection(pools),
    ),
)

ui.boot()
