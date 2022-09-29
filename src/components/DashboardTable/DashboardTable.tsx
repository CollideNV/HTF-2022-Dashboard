import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useCallback, useMemo } from 'react'
import { BadgeType } from '../../types/BadgeType'
import { Problem } from '../../types/Problem'
import { Team } from '../../types/Team'
import DashboardBadge from '../DashboardBadge/DashboardBadge'
import styles from './DashboardTable.module.scss'

interface DashboardTableProps {
    'data-testid'?: string
    teams?: Team[]
}

const dummyTeams: Team[] = [
    {
        name: 'Team A',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 3, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 0 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 1 }
        ],
        score: 4800
    },
    {
        name: 'Team B',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 3, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 3, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 0 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 3, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 0 }
        ],
        score: 0
    },
    {
        name: 'Team C',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 3, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 3, toDoSpells: 0 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 1 }
        ],
        score: 4950
    },
    {
        name: 'Team D',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 1 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 3 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 3 }
        ],
        score: 0
    },
    {
        name: 'Team E',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 1 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 3, toDoSpells: 0 }
        ],
        score: 3300
    },
    {
        name: 'Team F',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 2 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 1 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 }
        ],
        score: 1440
    },
    {
        name: 'Team G',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 0, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 1 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 1 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 0 }
        ],
        score: 3240
    },
    {
        name: 'Team H',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 1 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 2 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 0, toDoSpells: 1 }
        ],
        score: 0
    },
    {
        name: 'Team I',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 }
        ],
        score: 1500
    },
    {
        name: 'Team J',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 2, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 1 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 1 }
        ],
        score: 3000
    },
    {
        name: 'Team K',
        problems: [
            { badgeUrl: BadgeType.CYAN_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 },
            { badgeUrl: BadgeType.LIME_BADGE, description: '', failedSpells: 1, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 1 },
            { badgeUrl: BadgeType.THUNDER_BADGE, description: '', failedSpells: 2, name: '', score: 10, solved: false, solvedSpells: 1, toDoSpells: 0 }
        ],
        score: 500
    }
]

const headerColumns = ['Rank', 'Team', 'Problem 1', 'Problem 2', 'Problem 3', 'Total Score']

const DashboardTable: FC<DashboardTableProps> = ({ 'data-testid': dataTestId = 'DashboardTable', teams = dummyTeams }) => {
    const renderTableHeaders = () => {
        return headerColumns.map((c) => (
            <TableCell className={styles.tableHeaderCell} key={c}>
                {c}
            </TableCell>
        ))
    }

    const retrieveBadges = (problem: Problem) => {
        const badges: BadgeType[] = []

        for (let index = 0; index < problem.solvedSpells; index++) {
            badges.push(problem.badgeUrl)
        }

        for (let index = 0; index < problem.failedSpells; index++) {
            badges.push(BadgeType.FAIL_BADGE)
        }

        for (let index = 0; index < problem.toDoSpells; index++) {
            badges.push(BadgeType.EMPTY_BADGE)
        }

        return badges
    }

    const renderBadges = (badges: BadgeType[]) => {
        return badges.map((badge, i) => <DashboardBadge key={i} type={badge} />)
    }

    const renderedBadges = useCallback((problem: Problem) => {
        const badges = retrieveBadges(problem)

        return <div className={styles.badge_container}>{renderBadges(badges)}</div>
    }, [])

    const RenderTableRow: FC<{ index: number; team: Team }> = useCallback(
        ({ index, team }) => {
            return (
                <TableRow>
                    <TableCell className={styles.tableCell}>{index + 1}.</TableCell>
                    <TableCell className={styles.tableCell}>{team.name}</TableCell>
                    {team.problems.map((problem, i) => {
                        return (
                            <TableCell key={i} className={styles.badgesCell}>
                                {renderedBadges(problem)}
                            </TableCell>
                        )
                    })}
                    <TableCell className={styles.tableCell}>{team.score}</TableCell>
                </TableRow>
            )
        },
        [renderedBadges]
    )

    const renderTableRows = useMemo(() => {
        const sortedTeams = teams.sort((a, b) => b.score - a.score)
        const tableRows = []

        for (let index = 0; index < sortedTeams.length; index++) {
            tableRows.push(<RenderTableRow index={index} team={sortedTeams[index]} key={index} />)
        }

        return <>{tableRows}</>
    }, [RenderTableRow, teams])

    return (
        <div className={styles.DashboardTable} data-testid={dataTestId}>
            <TableContainer className={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>{renderTableHeaders()}</TableRow>
                    </TableHead>
                    <TableBody>{renderTableRows}</TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DashboardTable
