import React from 'react';
import styles from './NawMenu.module.css';

function ButtonOfMenu (props) {
    return   <div className={styles.link}><a href={props.link} >{props.name}</a></div>
}

function NawMenu() {
    return (
                <div className={styles.navMenu}>
                    <ButtonOfMenu link="#main" name="Главная" />
                    <ButtonOfMenu link="#skills" name="Навыки" />
                    <ButtonOfMenu link="#projects" name="Проекты" />
                    <ButtonOfMenu link="#contacts" name="Контакты" />
                </div>


    );
}

export default NawMenu;
