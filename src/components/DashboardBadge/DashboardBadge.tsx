import { FC } from 'react'
import CyanBadge from '../../resources/assets/badges/cyan_badge.min.svg'
import EmptyBadge from '../../resources/assets/badges/empty_badge.min.svg'
import FailBadge from '../../resources/assets/badges/fail_badge.min.svg'
import LimeBadge from '../../resources/assets/badges/lime_badge.min.svg'
import ThunderBadge from '../../resources/assets/badges/thunder_badge.min.svg'
import { BadgeType } from '../../types/BadgeType'
import styles from './DashboardBadge.module.scss'

interface DashboardBadgeProps {
    'data-testid'?: string
    type?: BadgeType
}

const DashboardBadge: FC<DashboardBadgeProps> = ({
    'data-testid': dataTestId = 'DashboardBadge',
    type = BadgeType.EMPTY_BADGE
}) => {
    const renderBadge = (badgeType: BadgeType) => {
        switch (badgeType) {
            case BadgeType.THUNDER_BADGE:
                return ThunderBadge
            case BadgeType.FLOOD:
                return CyanBadge
            case BadgeType.DROUGHT:
                return LimeBadge
            case BadgeType.FAIL_BADGE:
                return FailBadge
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
