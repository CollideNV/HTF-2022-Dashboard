export interface Spell {
    difficulty: number
    effect: string
    ingredients: string
    name: string
    recipe: string
    remainingAttempts: string
    solved: boolean | null
}
