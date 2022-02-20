import collection from './cards-collections/my-mtg-collection.json'
import { HtmlUi } from './html-ui'
import { MtgCardCollection } from './plugins/mtg/card-collection'
import { CardPool } from './plugins/mtg/card-pool'
import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator'

const pools: CardPool[] = collection.pools
const ui = HtmlUi(
    BoosterDraftGenerator(
        MtgCardCollection(pools),
    ),
)

ui.boot()
