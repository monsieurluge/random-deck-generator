import { GeneratorApi } from '../../ui/api/generator.api'
import { Deck, Generator } from '../deck-generator'
import { MtgCard } from './card/card'
import { MtgCardCollection } from './collection/card-collection'
import collection from './collection/my-afr.collection.json'
import { BoosterDraftGenerator } from './generator/booster-draft-generator'

export class MtgGeneratorApi implements GeneratorApi<MtgCard> {
    private readonly generator: Generator<MtgCard>

    constructor() {
        this.generator = BoosterDraftGenerator(
            MtgCardCollection(collection.pools),
        )
    }

    public async generate(): Promise<Deck<MtgCard>> {
        return this.generator.generate()
    }
}
