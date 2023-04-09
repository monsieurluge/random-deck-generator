import { Deck } from '../../generator/deck'
import { Generator } from '../../generator/generator'
import { GeneratorApi } from '../../ui/api/generator.api'
import { MtgCardCollection } from './card-collection'
import { MtgCard } from './card/card'
import collection from './cards/my-afr.collection.json'
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
