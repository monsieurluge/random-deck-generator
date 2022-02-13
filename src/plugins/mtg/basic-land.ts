import { MtgCard } from './card'

export const Forest: MtgCard = {
    name: 'forest',
    colors: ['green'],
    rarity: 'common',
    type: 'land',
    cost: [],
    subtypes: [],
}

export const Plain: MtgCard = {
    name: 'plain',
    colors: ['white'],
    rarity: 'common',
    type: 'land',
    cost: [],
    subtypes: [],
}

export const Island: MtgCard = {
    name: 'island',
    colors: ['blue'],
    rarity: 'common',
    type: 'land',
    cost: [],
    subtypes: [],
}

export const Mountain: MtgCard = {
    name: 'mountain',
    colors: ['red'],
    rarity: 'common',
    type: 'land',
    cost: [],
    subtypes: [],
}

export const Swamp: MtgCard = {
    name: 'swamp',
    colors: ['black'],
    rarity: 'common',
    type: 'land',
    cost: [],
    subtypes: [],
}

export type BasicLand = 'forest' | 'island' | 'mountain' | 'plain' | 'swamp'
