import { FC, useEffect, useMemo, useRef, useState } from 'react'
import styles from './HomePage.module.scss'

import { Button, CircularProgress, Grow, Slide } from '@mui/material'
import BriefingText from '../../components/BriefingText/BriefingText'
import Countdown from '../../components/Countdown/Countdown'
import DashboardTable from '../../components/DashboardTable/DashboardTable'
import { useGetDashboardQuery } from '../../redux/services/dashboardApi'
import sigil_1 from '../../resources/assets/sigil_1.png'
import { API_ROUTES } from '../../resources/constants/api-constants'
import environment from '../../resources/constants/environment'

const deadline = environment.deadline

const HomePage: FC = () => {
    const { data, isLoading, refetch } = useGetDashboardQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        pollingInterval: 30000
    })
    const [isBriefing, setBriefing] = useState<boolean>(
        window.location.href.endsWith('#briefing')
    )

    const toggleBriefing = () => {
        setBriefing(!isBriefing)
    }

    const ws = useRef<WebSocket | null>(null)

    useEffect(() => {
        ws.current = new WebSocket(
            `${environment.dashboard_api.websocket}${API_ROUTES.MESSAGES_ROUTE}`
        )
        const wsCurrent = ws.current

        return () => {
            wsCurrent?.close()
        }
    }, [])

    useEffect(() => {
        if (!ws.current) return

        //keep websocket alive
        const interval = setInterval(() => {
            ws.current?.send('ping')
        }, 30000)

        const listener = () => {
            console.log(`UPDATE RECIEVED: ${new Date()}`)

            refetch()
        }

        ws.current.addEventListener('message', listener)

        return () => {
            clearInterval(interval)
        }
    }, [refetch])

    const renderedBody = useMemo(() => {
        return (
            <div className={styles.body}>
                {isBriefing ? (
                    <BriefingText />
                ) : isLoading ? (
                    <CircularProgress />
                ) : (
                    <DashboardTable teams={data} />
                )}
            </div>
        )
    }, [data, isLoading, isBriefing])

    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Slide in direction="right">
                        <div className={styles.navigation}>
                            <h2>Deadline - Hack The Future:</h2>
                            <Countdown targetDate={deadline} />
                            <Button
                                className={styles.button}
                                onClick={toggleBriefing}
                            >
                                {isBriefing
                                    ? 'Toon dashboard'
                                    : 'Toon briefing'}
                            </Button>
                        </div>
                    </Slide>
                    <Grow in>{renderedBody}</Grow>
                </div>
                <div className={styles.background}>
                    <img src={sigil_1} className={styles.sigil} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
