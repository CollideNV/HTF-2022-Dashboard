import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className={styles.container}>
            <h1>Oops 404!</h1>
            <span onClick={() => redirectToHomePage()}>Homepage</span>
        </div>
    )
}

export default NotFoundPage
