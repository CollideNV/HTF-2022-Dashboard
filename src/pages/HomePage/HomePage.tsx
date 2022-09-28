import { FC } from 'react'
import styles from './HomePage.module.scss'

import DashboardTable from '../../components/DashboardTable/DashboardTable'
import sigil_1 from '../../resources/assets/sigil_1.png'

const HomePage: FC = () => {
    return (
        <div className={styles.HomePage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navigation}>
                        <h2>Deadline - Hack The Future:</h2>
                        <div className={styles.clock}>04:36:45</div>
                    </div>
                    <div className={styles.body}>
                        <DashboardTable />
                    </div>
                </div>
                <div className={styles.background}>
                    <img src={sigil_1} className={styles.sigil} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
