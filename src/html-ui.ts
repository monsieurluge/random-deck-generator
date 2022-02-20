import { CardOccurrence } from './generator/card-occurrence'
import { Deck } from './generator/deck'
import { Generator } from './generator/generator'

const existingHtmlElement = (name: string): HTMLElement => {
    const element: HTMLElement | null = document.querySelector(name)
    if (!element) {
        throw new Error(`there is no HTML element for this selector: "${name}"`)
    }
    return element
}

export function HtmlUi<T>(generator: Generator<T>) {
    const generateButton = existingHtmlElement('#generate-button')
    const resultZone = existingHtmlElement('#deck-result')

    const onGenerateButtonClick = () => {
        const deck: Deck<T> = generator.generate()
        resultZone.innerHTML = deck
            .list()
            .map((occurrence: CardOccurrence) => `${occurrence.total} __ ${occurrence.card.name}`)
            .join('<br/>')
    }

    function boot(): void {
        generateButton.addEventListener('click', onGenerateButtonClick)
    }

    return Object.freeze({
        boot,
    })
}
