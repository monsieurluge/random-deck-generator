import collection from './cards-collections/my-mtg-collection.json'
import { HtmlUi } from './html-ui'
import { MtgCardCollection } from './plugins/mtg/card-collection'
import { CardPool } from './plugins/mtg/card-pool'
import { MtgCard } from './plugins/mtg/card/card'
import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator'

const pools: CardPool<MtgCard>[] = collection.pools
const ui = HtmlUi(
    BoosterDraftGenerator(
        MtgCardCollection(pools),
    ),
)

ui.boot()
