import EducationItem, { EducationData } from './EducationItem';

import styles from '../App.module.css';

export default function Education() {
    const items:EducationData[] = [
        {
            period: '2014 - 2019',
            title: 'Informatics Engineer',
            institution: 'Universidad Autónoma de San Luis Potosí'
        },
    ];

    return (
        <section className={styles.section}>
            <h3 className={styles['section-title']}>Education</h3>
            <div className='space-y-1'>
            {items.map((i, j) => (
                <EducationItem 
                    data={i}
                    key={j}
                />
            ))}
            </div>
        </section>
    )
}