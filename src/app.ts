import collection from './cards-collections/my-mtg-collection.json'
import { GenericGenerator } from './generic-generator'
import { HtmlUi } from './html-ui'
import { Card } from './plugins/mtg/card'
import { MtgCardCollection } from './plugins/mtg/mtg-card-collection'

const ui = HtmlUi(
    GenericGenerator(
        MtgCardCollection(collection.cards as Card[]),
    ),
)

ui.boot()
