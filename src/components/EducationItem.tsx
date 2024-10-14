import styles from './EducationItem.module.css'

export default function EducationItem({ data }:{ data: EducationData }) {
    const {
        period,
        title,
        institution
    } = data;

    return (
        <div className={styles['education-item']}>
            <div className={styles['education-item__place']}>
                <div className={styles['education-item__period']}>{period}</div>
            </div>
            <div className={styles['education-item__details']}>
                <div className={styles['education-item__title']}>{title}</div>
                <div className={styles['education-item__institution']}>{institution}</div>
            </div>
        </div>
    )
}

export interface EducationData {
    period: string
    title: string
    institution: string
}