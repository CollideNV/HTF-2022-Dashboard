import { FC, useEffect, useMemo, useRef, useState } from 'react'
import styles from './HomePage.module.scss'

import { Player } from '@lottiefiles/react-lottie-player'
import { Button, Grow, Slide } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import BriefingText from '../../components/BriefingText/BriefingText'
import Countdown from '../../components/Countdown/Countdown'
import DashboardTable from '../../components/DashboardTable/DashboardTable'
import { useGetDashboardQuery } from '../../redux/services/dashboardApi'
import lottie from '../../resources/assets/lottie'
import sigil_1 from '../../resources/assets/sigil_1.png'
import { API_ROUTES } from '../../resources/constants/api-constants'
import environment from '../../resources/constants/environment'

const deadline = environment.deadline

const HomePage: FC = () => {
    const { data, isLoading, refetch, isSuccess } = useGetDashboardQuery(
        undefined,
        {
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
            pollingInterval: 30000
        }
    )

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

    const getFilteredTeams = useMemo(() => {
        if (!isSuccess || !data) return []

        return data
            .filter((team) => team.problems.length > 0)
            .sort((a, b) => b.score - a.score)
    }, [data, isSuccess])

    const renderedBody = useMemo(
        () => (
            <div className={styles.body}>
                {isBriefing ? (
                    <BriefingText />
                ) : isLoading ? (
                    <div className={styles.loadingContainer}>
                        <Player
                            autoplay
                            loop
                            src={lottie.MagicBook}
                            style={{ height: 300 }}
                        />
                        <h2>Writing Dashboard...</h2>
                    </div>
                ) : (
                    <DashboardTable teams={getFilteredTeams} />
                )}
            </div>
        ),
        [isBriefing, isLoading, getFilteredTeams]
    )

    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <TransitionGroup component={null}>
                        <Slide direction="right" timeout={1000}>
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
                        <Grow timeout={1000}>{renderedBody}</Grow>
                    </TransitionGroup>
                </div>
                <div className={styles.background}>
                    <img src={sigil_1} className={styles.sigil} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
