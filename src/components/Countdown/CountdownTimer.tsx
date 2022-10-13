import useCountdown from '../../hooks/useCountdown';

interface CountdownProps {
    targetDate: string | number | Date
}

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Time is up</span>
        </div>
    );
};

const ShowCounter = ({ hours, minutes, seconds }: { hours: number, minutes: number, seconds: number }) => {
    return (
        <div className="show-counter">
            <p>{hours}:{minutes}:{seconds}</p>
        </div>
    );
};

const CountdownTimer = ({ targetDate }: CountdownProps) => {
    const [hours, minutes, seconds] = useCountdown(targetDate);

    if (hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;