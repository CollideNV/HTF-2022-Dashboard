import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Briefing from './pages/Briefing/Briefing'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { ROUTES } from './resources/constants/routes-constants'
import './styles/main.scss'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path="/briefing" element={<Briefing/>}/>
            </Routes>
        </Router>
    )
}

export default RootComponent
