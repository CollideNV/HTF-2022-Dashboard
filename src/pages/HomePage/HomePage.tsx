import { Button } from '@mui/material'
import { FC } from 'react'
import DateDisplay from '../../components/DataDisplay/DateDisplay'
import environment from '../../resources/constants/environment'
import styles from './HomePage.module.scss'

const baseUrl = environment.api.url

const HomePage: FC = () => {
    return (
        <div className={styles.HomePage}>
            <h1>Hello world!</h1>
            <DateDisplay />
            <h5>Environment Variable:</h5>
            {baseUrl ? (
                <p>{`>>>>>${baseUrl}<<<<<`}</p>
            ) : (
                <>
                    <p>
                        The environment variable <span style={{ fontWeight: 'bold' }}>REACT_APP_API_URL</span> is empty or the .env file has not yet been made.
                    </p>
                    <p>
                        Be sure to make a<span style={{ fontWeight: 'bold' }}>.env.local</span> file
                    </p>
                </>
            )}
            <button>default button</button>
            <Button>mui button</Button>
            <Button color="primary">mui primary button</Button>
            <Button color="secondary">mui secondary button</Button>
            <Button color="success">mui success button</Button>
            <Button color="warning">mui warning button</Button>
            <Button color="error">mui error button</Button>
        </div>
    )
}

export default HomePage
