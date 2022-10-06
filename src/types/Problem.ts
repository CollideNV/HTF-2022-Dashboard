import { BadgeType } from './BadgeType'
import { Spell } from './Spell'

export interface Problem {
    badgeUrl: BadgeType
    description: string
    name: string
    score: number
    solved: boolean
    spells: Spell[]
}
