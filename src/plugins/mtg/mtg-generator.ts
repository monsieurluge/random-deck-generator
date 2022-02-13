import { CardCollection } from '../../card-collection'
import { Generator } from '../../generator'
import { addRandomWeight, extractItem, heavierLast } from '../../libs/weighten-sort'

export function MtgGenerator(collection: CardCollection): Generator {
    function generate() {
        return collection
            .cards()
            .map(addRandomWeight)
            .sort(heavierLast)
            .map(extractItem)
    }

    return Object.freeze({
        generate,
    })
}
