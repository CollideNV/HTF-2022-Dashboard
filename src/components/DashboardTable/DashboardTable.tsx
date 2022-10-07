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
import { Spell } from '../../types/Spell'
import { Team } from '../../types/Team'
import DashboardBadge from '../DashboardBadge/DashboardBadge'
import styles from './DashboardTable.module.scss'

interface DashboardTableProps {
    'data-testid'?: string
    teams?: Team[]
}

const DashboardTable: FC<DashboardTableProps> = ({
    'data-testid': dataTestId = 'DashboardTable',
    teams = []
}) => {
    const renderTableHeaders = useMemo(() => {
        console.log({ teams })

        const problemHeaders = teams[0].problems.map((p) => p.name)

        return (
            <>
                <TableCell className={styles.tableHeaderCell}>Rank</TableCell>
                <TableCell className={styles.tableHeaderCell}>Team</TableCell>
                {problemHeaders.map((header, i) => (
                    <TableCell className={styles.tableHeaderCell} key={i}>
                        {header}
                    </TableCell>
                ))}
                <TableCell className={styles.tableHeaderCell}>Score</TableCell>
            </>
        )
    }, [])

    const renderedBadges = useCallback(
        (spells: Spell[], badgeType: BadgeType) => {
            const getBadgeType = (spell: Spell): BadgeType => {
                if (spell.solved == null) return BadgeType.EMPTY_BADGE

                return spell.solved ? badgeType : BadgeType.FAIL_BADGE
            }

            return (
                <div className={styles.badge_container}>
                    {spells.map((spell, i) => (
                        <DashboardBadge key={i} type={getBadgeType(spell)} />
                    ))}
                </div>
            )
        },
        []
    )

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
                                {renderedBadges(
                                    problem.spells,
                                    problem.badgeUrl
                                )}
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
                        <TableRow>{renderTableHeaders}</TableRow>
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
