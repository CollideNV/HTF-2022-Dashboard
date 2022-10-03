import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
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


const headerColumns = [
    'Rank',
    'Team',
    'Problem 1',
    'Problem 2',
    'Problem 3',
    'Total Score'
]

const DashboardTable: FC<DashboardTableProps> = ({
    'data-testid': dataTestId = 'DashboardTable',
    teams = []
}) => {
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

        return (
            <div className={styles.badge_container}>{renderBadges(badges)}</div>
        )
    }, [])

    const RenderTableRow: FC<{ index: number; team: Team }> = useCallback(
        ({ index, team }) => {
            return (
                <TableRow>
                    <TableCell className={styles.tableCell}>
                        {index + 1}.
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                        {team.name}
                    </TableCell>
                    {team.problems.map((problem, i) => {
                        return (
                            <TableCell key={i} className={styles.badgesCell}>
                                {renderedBadges(problem)}
                            </TableCell>
                        )
                    })}
                    <TableCell className={styles.tableCell}>
                        {team.score}
                    </TableCell>
                </TableRow>
            )
        },
        [renderedBadges]
    )

    const renderTableRows = useMemo(() => {
        const filteredTeams = teams.filter((t) => t.problems.length > 0)
        const sortedTeams = filteredTeams.sort((a, b) => b.score - a.score)
        const tableRows = []

        for (let index = 0; index < sortedTeams.length; index++) {
            tableRows.push(
                <RenderTableRow
                    index={index}
                    team={sortedTeams[index]}
                    key={index}
                />
            )
        }

        return <>{tableRows}</>
    }, [RenderTableRow, teams])

    const renderTable = useMemo(() => {
        return (
            <TableContainer className={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>{renderTableHeaders()}</TableRow>
                    </TableHead>
                    <TableBody>{renderTableRows}</TableBody>
                </Table>
            </TableContainer>
        )
    }, [renderTableRows])

    const renderNoEntries = () => <p>Team Progress will be displayed here.</p>

    return (
        <div className={styles.DashboardTable} data-testid={dataTestId}>
            {teams.length > 0 ? renderTable : renderNoEntries()}
        </div>
    )
}

export default DashboardTable
