import React from 'react';
import styles from './Skills.module.css';

function Skill(props) {
    return <div className={styles.skill}>
        <div className={styles.photo}>
            <img src={props.photo}/>
        </div>
        <h2>{props.name}</h2>
        <div>
            {props.desctiption}
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
                    <Skill photo="" name="Name skill" desctiption="description of skill"/>
                    <Skill photo="" name="Name skill" desctiption="description of skill"/>
                    <Skill photo="" name="Name skill" desctiption="description of skill"/>
                </div>
            </div>
        </div>

    );
}

export default Skills;
