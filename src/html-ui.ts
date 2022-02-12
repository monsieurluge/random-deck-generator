import { Generator } from './generator'

const existingHtmlElement = (name: string): HTMLElement => {
    const element: HTMLElement | null = document.querySelector(name)
    if (!element) {
        throw new Error(`there is no HTML element for this selector: "${name}"`)
    }
    return element
}

export function HtmlUi (generator: Generator) {
    const generateButton = existingHtmlElement('#generate-button')

    const resultZone = existingHtmlElement('#deck-result')

    generateButton.addEventListener('click', () => {
        const test: string[] = generator.generate()
        resultZone.innerHTML = test.join('<br/>')
    })
}
