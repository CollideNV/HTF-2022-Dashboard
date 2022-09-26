import { FC } from 'react'
import environment from '../../resources/constants/environment'
import styles from './HomePage.module.scss'

import sigil_1 from '../../resources/assets/sigil_1.png'

const baseUrl = environment.api.url

const HomePage: FC = () => {
    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <h2>Deadline - Hack The Future:</h2>
                    <p className={styles.clock}>04:36:45</p>
                    <img src={sigil_1} className={styles.sigil} />
                </div>
                <div className={styles.body}></div>
                <div className={styles.leather} />
            </div>
        </div>
    )
}

export default HomePage
