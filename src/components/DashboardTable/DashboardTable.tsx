import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useCallback, useMemo } from 'react'
import { BadgeType } from '../../types/BadgeType'
import DashboardBadge from '../DashboardBadge/DashboardBadge'
import styles from './DashboardTable.module.scss'

interface DashboardTableProps {
    'data-testid'?: string
}

interface Spell {
    type: BadgeType
    solved: boolean
    remainingAttempts: number
}

interface Problem {
    // badgeUrl: string
    // description: string
    // name: string
    // score: number
    // solved: boolean
    spells: Spell[]
}

interface Team {
    name: string
    spells: Spell[]
    score: number
}

const teams: Team[] = [
    {
        name: 'Team A',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 2 }
        ],
        score: 4800
    },
    {
        name: 'Team B',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: false, remainingAttempts: 2 }
        ],
        score: 0
    },
    {
        name: 'Team C',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: true, remainingAttempts: 0 },
            { type: BadgeType.LIME_BADGE, solved: true, remainingAttempts: 0 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 0 }
        ],
        score: 4950
    },
    {
        name: 'Team D',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 0 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 0 },
            { type: BadgeType.THUNDER_BADGE, solved: false, remainingAttempts: 0 }
        ],
        score: 0
    },
    {
        name: 'Team E',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: true, remainingAttempts: 0 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 2 }
        ],
        score: 3300
    },
    {
        name: 'Team F',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: false, remainingAttempts: 0 }
        ],
        score: 1440
    },
    {
        name: 'Team G',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 0 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 2 }
        ],
        score: 3240
    },
    {
        name: 'Team H',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: false, remainingAttempts: 2 }
        ],
        score: 0
    },
    {
        name: 'Team I',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: false, remainingAttempts: 2 }
        ],
        score: 1500
    },
    {
        name: 'Team J',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: false, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 2 }
        ],
        score: 3000
    },
    {
        name: 'Team K',
        spells: [
            { type: BadgeType.CYAN_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.LIME_BADGE, solved: true, remainingAttempts: 2 },
            { type: BadgeType.THUNDER_BADGE, solved: true, remainingAttempts: 2 }
        ],
        score: 500
    }
]

const headerColumns = ['Rank', 'Team', 'Problem 1', 'Problem 2', 'Problem 3', 'Total Score']

const DashboardTable: FC<DashboardTableProps> = ({ 'data-testid': dataTestId = 'DashboardTable' }) => {
    const renderTableHeaders = () => {
        return headerColumns.map((c) => (
            <TableCell className={styles.tableHeaderCell} key={c}>
                {c}
            </TableCell>
        ))
    }

    const renderBadges = useCallback((spells: Spell[]) => {
        const renderBadge = (spell: Spell) => {
            let badge: BadgeType = BadgeType.EMPTY_BADGE
            if (spell.solved) {
                badge = spell.type
            } else {
                badge = spell.remainingAttempts > 0 ? BadgeType.EMPTY_BADGE : BadgeType.FAIL_BADGE
            }

            return <DashboardBadge type={badge} />
        }

        return <div className={styles.badge_container}>{spells.map((s) => renderBadge(s))}</div>
    }, [])

    const RenderTableRow: FC<{ index: number; team: Team }> = useCallback(
        ({ index, team }) => {
            return (
                <TableRow>
                    <TableCell className={styles.tableCell}>{index + 1}.</TableCell>
                    <TableCell className={styles.tableCell}>{team.name}</TableCell>
                    {team.spells.map((spell, i) => {
                        return (
                            <TableCell key={i} className={styles.badgesCell}>
                                {renderBadges(team.spells)}
                            </TableCell>
                        )
                    })}
                    <TableCell className={styles.tableCell}>{team.score}</TableCell>
                </TableRow>
            )
        },
        [renderBadges]
    )

    const renderTableRows = useMemo(() => {
        const sortedTeams = teams.sort((a, b) => b.score - a.score)
        const tableRows = []

        for (let index = 0; index < sortedTeams.length; index++) {
            tableRows.push(<RenderTableRow index={index} team={sortedTeams[index]} key={index} />)
        }

        return <>{tableRows}</>
    }, [RenderTableRow])

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
