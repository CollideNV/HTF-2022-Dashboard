import { FC, useMemo, useState } from 'react'
import styles from './HomePage.module.scss'

import { Button, CircularProgress } from '@mui/material'
import BriefingText from '../../components/BriefingText/BriefingText'
import Countdown from '../../components/Countdown/Countdown'
import DashboardTable from '../../components/DashboardTable/DashboardTable'
import { useGetDashboardQuery } from '../../redux/services/dashboardApi'
import sigil_1 from '../../resources/assets/sigil_1.png'
import environment from '../../resources/constants/environment'

const deadline = environment.deadline

const HomePage: FC = () => {
    const { data, isFetching } = useGetDashboardQuery()
    const [isBriefing, setBriefing] = useState<boolean>(
        window.location.href.endsWith('#briefing')
    )

    const toggleBriefing = () => {
        setBriefing(!isBriefing)
    }

    const renderedBody = useMemo(() => {
        return (
            <div className={styles.body}>
                {isBriefing ? (
                    <BriefingText />
                ) : isFetching ? (
                    <CircularProgress />
                ) : (
                    <DashboardTable teams={data} />
                )}
            </div>
        )
    }, [data, isFetching, isBriefing])

    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navigation}>
                        <h2>Deadline - Hack The Future:</h2>
                        <Countdown targetDate={deadline} />
                        <Button
                            className={styles.button}
                            onClick={toggleBriefing}
                        >
                            {isBriefing ? 'Toon dashboard' : 'Toon briefing'}
                        </Button>
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
