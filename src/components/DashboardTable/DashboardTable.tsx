import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useCallback, useMemo } from 'react'
import styles from './DashboardTable.module.scss'

interface DashboardTableProps {
    'data-testid'?: string
}

const headerColumns = ['Rank', 'Team', 'Problem 1', 'Problem 2', 'Problem 3', 'Total Score']

const DashboardTable: FC<DashboardTableProps> = ({ 'data-testid': dataTestId = 'DashboardTable' }) => {
    const renderTableHeaders = () => {
        return headerColumns.map((c) => <TableCell key={c}>{c}</TableCell>)
    }

    const renderBadges = () => {
        return (
            <div className={styles.badge_container}>
                <div className={styles.empty_badge}></div>
                <div className={styles.empty_badge}></div>
                <div className={styles.empty_badge}></div>
            </div>
        )
    }

    const RenderTableRow: FC<{ index: number }> = useCallback(({ index }) => {
        return (
            <TableRow>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>Team A</TableCell>
                <TableCell>{renderBadges()}</TableCell>
                <TableCell>{renderBadges()}</TableCell>
                <TableCell>{renderBadges()}</TableCell>
                <TableCell>10000</TableCell>
            </TableRow>
        )
    }, [])

    const renderTableRows = useMemo(() => {
        const tableRows = []
        for (let index = 0; index < 20; index++) {
            tableRows.push(<RenderTableRow index={index} key={index} />)
        }

        return <>{tableRows}</>
    }, [RenderTableRow])

    return (
        <div className={styles.DashboardTable} data-testid={dataTestId}>
            <TableContainer>
                <Table>
                    <TableHead className={styles.header}>
                        <TableRow>{renderTableHeaders()}</TableRow>
                    </TableHead>
                    <TableBody className={styles.table_body}>{renderTableRows}</TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DashboardTable
