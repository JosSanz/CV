import styles from './ExperienceItem.module.css'

export default function ExperienceItem({ data }:{ data: ExperienceData }) {
    const {
        period,
        ubication,
        position,
        institution,
        activities,
    } = data;

    return (
        <div className={styles['experience-item']}>
            <div className={styles['experience-item__place']}>
                <div className={styles['experience-item__period']}>{period}</div>
                <div className={styles['experience-item__ubication']}>{ubication}</div>
            </div>
            <div className={styles['experience-item__details']}>
                <div className={styles['experience-item__position']}>{position}</div>
                <div className={styles['experience-item__institution']}>{institution}</div>
                <ul className={styles['experience-item__activities']}>
                {activities.map((a, i) => (
                    <li key={i}>{a}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export interface ExperienceData {
    period: string
    ubication: string
    position: string
    institution: string
    activities: string[]
}