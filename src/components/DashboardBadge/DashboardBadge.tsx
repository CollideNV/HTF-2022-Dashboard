import DroughtBadge from '../../resources/assets/badges/drought_badge.min.svg'
import EmptyBadge from '../../resources/assets/badges/empty_badge.min.svg'
import FailBadge from '../../resources/assets/badges/fail_badge.min.svg'
import FloodBadge from '../../resources/assets/badges/flood_badge.min.svg'
import ImpactBadge from '../../resources/assets/badges/impact_badge.min.svg'
import SuccessBadge from '../../resources/assets/badges/success_badge.min.svg'
import { BadgeType } from '../../types/BadgeType'
import styles from './DashboardBadge.module.scss'

interface DashboardBadgeProps {
    'data-testid'?: string
    type?: BadgeType
}

const DashboardBadge = ({
    'data-testid': dataTestId = 'DashboardBadge',
    type = BadgeType.EMPTY_BADGE
}: DashboardBadgeProps) => {
    const renderBadge = (badgeType: BadgeType) => {
        switch (badgeType) {
            case BadgeType.IMPACT_BADGE:
                return ImpactBadge
            case BadgeType.FLOOD_BADGE:
                return FloodBadge
            case BadgeType.DROUGHT_BADGE:
                return DroughtBadge
            case BadgeType.FAIL_BADGE:
                return FailBadge
            case BadgeType.SUCCESS_BADGE:
                return SuccessBadge
            default:
                return EmptyBadge
        }
    }

    return (
        <div className={styles.DashboardBadge} data-testid={dataTestId}>
            <img src={renderBadge(type)} className={styles.svgBadge} />
        </div>
    )
}

export default DashboardBadge
