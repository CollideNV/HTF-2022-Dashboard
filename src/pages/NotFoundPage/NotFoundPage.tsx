import { Player } from '@lottiefiles/react-lottie-player'
import { Button } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import lottie from '../../resources/assets/lottie'
import { ROUTES } from '../../resources/constants/routes-constants'

import styles from './NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.HOMEPAGE_ROUTE)
    }

    return (
        <div className={styles.NotFoundPage}>
            <div className={styles.lottieContainer}>
                <Player
                    src={lottie.PurpleBlob}
                    autoplay
                    loop
                    className={styles.purpleLottiePlayer}
                />
                <Player
                    src={lottie.LayeredBlob}
                    autoplay
                    loop
                    className={styles.layeredLottiePlayer}
                />
                <Player
                    src={lottie.Owl}
                    autoplay
                    loop
                    className={styles.layeredLottiePlayer}
                />
            </div>
            <p>{"We're not in Kansas anymore!"}</p>
            <Button variant="contained" onClick={() => redirectToHomePage()} color='secondary'>
                Go Back Home
            </Button>
        </div>
    )
}

export default NotFoundPage
