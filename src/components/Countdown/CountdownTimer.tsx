import useCountdown from '../../hooks/useCountdown'
import styles from './CountdownTimer.module.scss';

interface CountdownProps {
    targetDate: string | number | Date
}

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Time is up</span>
        </div>
    )
}

function addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, '0')
}

const ShowCounter = ({
    hours,
    minutes,
    seconds
}: {
    hours: number
    minutes: number
    seconds: number
}) => {
    return (
        <div>
            <p className={styles.CountdownTimer}>
                {addLeadingZeros(hours, 2)}:{addLeadingZeros(minutes, 2)}:
                {addLeadingZeros(seconds, 2)}
            </p>
        </div>
    )
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
    const [hours, minutes, seconds] = useCountdown(targetDate)

    if (hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
    }
}

export default CountdownTimer
