import styles from '../App.module.css';
import summaryStyles from './Summary.module.css';

export default function Summary() {
    return (
        <section className={styles.section}>
            <h3 className={styles['section-title']}>Summary</h3>
            <p className={summaryStyles['summary-text']}>.Net Developer with comprehensive experience in developing applications. I possess extensive knowledge of both relational and non-relational databases, enabling me to design and maintain effi cient and reliable information systems. I excel in working with front-end tools, including ReactJs and CSS, which allows me to create attractive and functional user interfaces.</p>
        </section>
    )
}