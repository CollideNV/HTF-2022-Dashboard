import { BadgeType } from './BadgeType'

export interface Problem {
    badgeUrl: BadgeType
    description: string
    failedSpells: number
    name: string
    score: number
    solved: boolean
    solvedSpells: number
    toDoSpells: number
}
