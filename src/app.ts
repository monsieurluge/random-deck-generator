import { MtgCardCollection } from './mtg-card-collection'
import { GenericGenerator } from './generic-generator'
import { HtmlUi } from './html-ui'

HtmlUi(
    GenericGenerator(
        MtgCardCollection(),
    ),
)
