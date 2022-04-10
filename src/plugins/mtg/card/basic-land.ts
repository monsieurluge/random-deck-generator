import { MtgCard } from './card'

export const Forest: MtgCard = {
    id: 'basic forest',
    name: 'forest',
    colors: [ 'green' ],
    rarity: 'common',
    type: 'basic land',
    cost: [],
    subtypes: [],
}

export const Plain: MtgCard = {
    id: 'basic plain',
    name: 'plain',
    colors: [ 'white' ],
    rarity: 'common',
    type: 'basic land',
    cost: [],
    subtypes: [],
}

export const Island: MtgCard = {
    id: 'basic island',
    name: 'island',
    colors: [ 'blue' ],
    rarity: 'common',
    type: 'basic land',
    cost: [],
    subtypes: [],
}

export const Mountain: MtgCard = {
    id: 'basic mountain',
    name: 'mountain',
    colors: [ 'red' ],
    rarity: 'common',
    type: 'basic land',
    cost: [],
    subtypes: [],
}

export const Swamp: MtgCard = {
    id: 'basic swamp',
    name: 'swamp',
    colors: [ 'black' ],
    rarity: 'common',
    type: 'basic land',
    cost: [],
    subtypes: [],
}

export type BasicLand = 'forest' | 'island' | 'mountain' | 'plain' | 'swamp'
