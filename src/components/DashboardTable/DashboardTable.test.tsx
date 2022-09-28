import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import DashboardTable from './DashboardTable'

describe('<DashboardTable />', () => {
    test('it should mount', () => {
        render(<DashboardTable />)

        const dashboardTable = screen.getByTestId('DashboardTable')

        expect(dashboardTable).toBeInTheDocument()
    })
})
