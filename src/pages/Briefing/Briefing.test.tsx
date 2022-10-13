import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Briefing from './Briefing'

describe('<Briefing />', () => {
    test('it should mount', () => {
        render(<Briefing />)

        const briefing = screen.getByTestId('Briefing')

        expect(briefing).toBeInTheDocument()
    })
})
