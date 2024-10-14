import ExperienceItem, { ExperienceData } from './ExperienceItem';

import styles from '../App.module.css';

export default function Experience() {
    const items:ExperienceData[] = [
        {
            period: '2023 - Present',
            ubication: 'S.L.P. México',
            position: 'Project Manager',
            institution: 'SitiLab Creative Developers',
            activities: [
                'Analysis of customer requirements',
                'Design and development of web applications in .NET and ReactJs',
                'Interface desing in Figma',
                'Docker container integration',
                'Deploying applications on AWS',
                'Work team management'
            ]
        },
        {
            period: '2019 - 2022',
            ubication: 'S.L.P. México',
            position: 'Developer',
            institution: 'SitiLab Creative Developers',
            activities: [
                'Development API REST applications in .Net Framework',
                'Database management with SQLServer (Entity Framework) and MongoDB',
                'Support in interface development with ReactJs'
            ]
        },
        {
            period: '2019',
            ubication: 'S.L.P. México',
            position: 'Full Stack Developer',
            institution: 'PRYBE Protecciones y Benefi cios S.C',
            activities: [
                'Development web applications in .Net Framework using SQLServer (Entity Framework)',
                'Design and development of interfaces using AngularJs'
            ]
        },
        {
            period: '2018 - 2019',
            ubication: 'S.L.P. México',
            position: 'Developer',
            institution: 'UASLP División de Informática',
            activities: [
                'Development web applications in .Net Framework using SQLServer (Entity Framework)'
            ]
        }
    ];
    
    return (
        <section className={styles.section}>
            <h3 className={styles['section-title']}>EXPERIENCE</h3>
            <div className='space-y-1'>
            {items.map((i, j) => (
                <ExperienceItem 
                    data={i}
                    key={j}
                />
            ))}
            </div>
        </section>
    )
}