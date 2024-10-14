import styles from '../App.module.css';
import skillStyles from './Skills.module.css';

export default function Skills() {
    const tech: string[] = [
        'NET',
        'ReactJs',
        'SQLServer',
        'MongoDB',
        'CSS',
        'HTML',
        'JavaScript',
        'MySQL',
        'Docker',
        'AWS',
        'Git'
    ];

    const human: string[] = [
        'Proactive',
        'Good communicator',
        'Team leader',
        'Time management',
        'Fast learning'
    ];

    return (
        <section className={styles.section}>
            <h3 className={styles['section-title']}>Skills</h3>
            <div className={skillStyles['skill-section']}>
            {tech.map((i, j) => (
                <div key={j} className={skillStyles['skill-section__item']}>{i}</div>
            ))}
            </div>
            <div className={skillStyles['skill-section']}>
            {human.map((i, j) => (
                <div key={j} className={skillStyles['skill-section__item']}>{i}</div>
            ))}
            </div>
        </section>
    )
}