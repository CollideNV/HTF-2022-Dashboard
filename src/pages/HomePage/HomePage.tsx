import { FC, useMemo } from 'react'
import styles from './HomePage.module.scss'

import { CircularProgress } from '@mui/material'
import Countdown from '../../components/Countdown/Countdown'
import DashboardTable from '../../components/DashboardTable/DashboardTable'
import { useGetDashboardQuery } from '../../redux/services/dashboardApi'
import sigil_1 from '../../resources/assets/sigil_1.png'

const HomePage: FC = () => {
    const { data, isFetching } = useGetDashboardQuery()

    const renderedBody = useMemo(() => {
        return (
            <div className={styles.body}>
                {isFetching ? (
                    <CircularProgress />
                ) : (
                    <DashboardTable teams={data} />
                )}
            </div>
        )
    }, [data, isFetching])

    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navigation}>
                        <h2>Deadline - Hack The Future:</h2>
                        <div className={styles.clock}>04:36:45</div>
                        <Countdown />
                    </div>
                    {renderedBody}
                </div>
                <div className={styles.background}>
                    <img src={sigil_1} className={styles.sigil} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
