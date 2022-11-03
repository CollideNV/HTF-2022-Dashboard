import { Player } from '@lottiefiles/react-lottie-player'
import {
    Grow,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import { FC, useCallback, useMemo, useRef } from 'react'
import CentralConfettiLottie from '../../resources/assets/lottie/central_confetti.json'
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
    const containerRef = useRef(null)

    const renderTableHeaders = useMemo(() => {
        const problemHeaders: string[] = []
        teams[0]?.problems.map((p) => problemHeaders.push(p.name))

        return (
            <>
                <TableCell className={styles.tableHeaderCell}>Rank</TableCell>
                <TableCell className={styles.tableHeaderCell}>Team</TableCell>
                {problemHeaders.map((header, i) => (
                    <TableCell
                        className={styles.tableHeaderProblemCell}
                        key={i}
                    >
                        {header}
                    </TableCell>
                ))}
                <TableCell className={styles.tableHeaderCell}>Score</TableCell>
            </>
        )
    }, [teams])

    const getBadgeType = (spell: Spell, badgeType: BadgeType): BadgeType => {
        if (spell.solved == null) return BadgeType.EMPTY_BADGE

        return spell.solved
            ? badgeType == BadgeType.NULL
                ? BadgeType.SUCCESS_BADGE
                : badgeType
            : BadgeType.FAIL_BADGE
    }

    const renderedBadges = useCallback(
        (spells: Spell[], badgeType: BadgeType) => {
            const renderBadge = (spell: Spell, badgeType: BadgeType) => {
                const checked = spell.solved == null

                return (
                    <>
                        <Grow
                            in={checked}
                            mountOnEnter
                            unmountOnExit
                            timeout={{ appear: 100, enter: 100, exit: 0 }}
                        >
                            <span>
                                <DashboardBadge type={BadgeType.EMPTY_BADGE} />
                            </span>
                        </Grow>
                        <Grow
                            in={!checked}
                            mountOnEnter
                            unmountOnExit
                            timeout={{ appear: 100, enter: 250, exit: 0 }}
                        >
                            <span>
                                <DashboardBadge
                                    type={getBadgeType(spell, badgeType)}
                                />
                            </span>
                        </Grow>
                        {spell.solved && (
                            <Player
                                src={CentralConfettiLottie}
                                autoplay
                                className={styles.confetti}
                            />
                        )}
                    </>
                )
            }

            return (
                <div className={styles.badge_container}>
                    {spells.map((spell, i) => (
                        <div key={i} className={styles.badge}>
                            {renderBadge(spell, badgeType)}
                        </div>
                    ))}
                </div>
            )
        },
        []
    )

    const RenderTableRow = useCallback(
        (index: number, team: Team) => {
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
                <Slide
                    direction="up"
                    mountOnEnter
                    unmountOnExit
                    key={index}
                    in
                    container={containerRef.current}
                >
                    {RenderTableRow(index, sortedTeams[index])}
                </Slide>
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
    }, [renderTableHeaders, renderTableRows])

    const renderNoEntries = (
        <div className={styles.noEntries}>
            <Typography variant="h5">
                Team Progress will be displayed here.
            </Typography>
        </div>
    )

    return (
        <div
            className={styles.DashboardTable}
            data-testid={dataTestId}
            ref={containerRef}
        >
            {teams.length ? renderTable : renderNoEntries()}
        </div>
    )
}

export default DashboardTable
