import React from 'react';
import styles from './NawMenu.module.css';

function ButtonOfMenu (props) {
    return   <a href="" className={styles.link}>{props.name}</a>
}

function NawMenu() {
    return (
                <div className={styles.navMenu}>
                    <ButtonOfMenu name="Главная" />
                    <ButtonOfMenu name="Скиллы" />
                    <ButtonOfMenu name="Проекты" />
                    <ButtonOfMenu name="Контакты" />
                </div>


    );
}

export default NawMenu;
