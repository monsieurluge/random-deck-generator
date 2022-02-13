import collection from './cards-collections/my-mtg-collection.json'
import { HtmlUi } from './html-ui'
import { CardPool } from './plugins/mtg/card'
import { MtgCardCollection } from './plugins/mtg/mtg-card-collection'
import { MtgGenerator } from './plugins/mtg/mtg-generator'

const ui = HtmlUi(
    MtgGenerator(
        MtgCardCollection(collection.pool as CardPool[]),
    ),
)

ui.boot()
