import moment from 'moment'
import { useEffect, useMemo, useState } from 'react'
import styles from './Countdown.module.scss'

interface CountdownProps {
    'data-testid'?: string
}

const Countdown = ({
    'data-testid': dataTestId = 'Countdown'
}: CountdownProps) => {
    const [time, setTime] = useState(moment())
    useEffect(() => {
        const id = setInterval(() => setTime(moment()), 1000)
        return clearInterval(id)
    }, [])

    const formattedTime = useMemo(() => {
        return time.format('hh:mm:ss')
    }, [time])

    return (
        <div className={styles.Countdown} data-testid={dataTestId}>
            {formattedTime}
        </div>
    )
}

export default Countdown
