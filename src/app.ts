import collection from './cards-collections/mtg - forgotten realms.json'
import { GenericGenerator } from './generic-generator'
import { HtmlUi } from './html-ui'
import { MtgCardCollection } from './plugins/mtg/mtg-card-collection'

HtmlUi(
    GenericGenerator(
        MtgCardCollection(collection.cards),
    ),
)
