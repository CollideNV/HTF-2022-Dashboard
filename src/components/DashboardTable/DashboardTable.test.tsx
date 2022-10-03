import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { BadgeType } from '../../types/BadgeType'
import { Team } from '../../types/Team'
import DashboardTable from './DashboardTable'

describe('<DashboardTable />', () => {
    test('it should mount', () => {
        render(<DashboardTable teams={mockTeams} />)

        const dashboardTable = screen.getByTestId('DashboardTable')

        expect(dashboardTable).toBeInTheDocument()
    })
})

const mockTeams: Team[] = [
    {
        name: 'Team A',
        problems: [
            {
                badgeUrl: BadgeType.FLOOD,
                description: '',
                failedSpells: 0,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 3,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.DROUGHT,
                description: '',
                failedSpells: 1,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 2,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.THUNDER_BADGE,
                description: '',
                failedSpells: 1,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 1,
                toDoSpells: 1
            }
        ],
        score: 4800
    },
    {
        name: 'Team B',
        problems: [
            {
                badgeUrl: BadgeType.FLOOD,
                description: '',
                failedSpells: 3,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 0,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.DROUGHT,
                description: '',
                failedSpells: 3,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 0,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.THUNDER_BADGE,
                description: '',
                failedSpells: 3,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 0,
                toDoSpells: 0
            }
        ],
        score: 0
    },
    {
        name: 'Team C',
        problems: [
            {
                badgeUrl: BadgeType.FLOOD,
                description: '',
                failedSpells: 0,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 3,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.DROUGHT,
                description: '',
                failedSpells: 0,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 3,
                toDoSpells: 0
            },
            {
                badgeUrl: BadgeType.THUNDER_BADGE,
                description: '',
                failedSpells: 0,
                name: '',
                score: 10,
                solved: false,
                solvedSpells: 2,
                toDoSpells: 1
            }
        ],
        score: 4950
    }
]
