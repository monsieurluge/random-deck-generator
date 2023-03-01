import { MtgCard } from './card'

export const Forest: MtgCard = {
    colors: ['green'],
    convertedManaCost: 0,
    cost: '',
    name: 'forest',
    rarity: 'common',
    subtypes: [],
    type: 'basic land',
}

export const Plains: MtgCard = {
    colors: ['white'],
    convertedManaCost: 0,
    cost: '',
    name: 'plains',
    rarity: 'common',
    subtypes: [],
    type: 'basic land',
}

export const Island: MtgCard = {
    colors: ['blue'],
    convertedManaCost: 0,
    cost: '',
    name: 'island',
    rarity: 'common',
    subtypes: [],
    type: 'basic land',
}

export const Mountain: MtgCard = {
    colors: ['red'],
    convertedManaCost: 0,
    cost: '',
    name: 'mountain',
    rarity: 'common',
    subtypes: [],
    type: 'basic land',
}

export const Swamp: MtgCard = {
    colors: ['black'],
    convertedManaCost: 0,
    cost: '',
    name: 'swamp',
    rarity: 'common',
    subtypes: [],
    type: 'basic land',
}

export type BasicLand = 'forest' | 'island' | 'mountain' | 'plain' | 'swamp'
