import React from 'react';
import styles from './Skills.module.css';

function Skill(props) {
    return <div className={styles.skill}>
        <div className={styles.photo}>
            <img src=""/>
        </div>
        <h2>Название навыка</h2>
        <div>
            Подробное описание навыка
        </div>
    </div>
}

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={styles.blockSkills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>

    );
}

export default Skills;
