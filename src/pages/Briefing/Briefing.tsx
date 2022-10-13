import { FC } from 'react'
import styles from './Briefing.module.scss'

interface BriefingProps {
    'data-testid'?: string
}

const Briefing: FC<BriefingProps> = ({
    'data-testid': dataTestId = 'Briefing'
}) => {
    return (
        <div className={styles.Briefing} data-testid={dataTestId}>
            Briefing Component
        </div>
    )
}

export default Briefing
