import React from 'react';
import styles from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
    const classForTheme = props.theme==="dark" ? `${styles.dark}` : `${styles.light}`;
    return  <div className={`${styles.header} ${classForTheme}`}>
        <div className={styles.animation}>
            <div className={styles.d1}></div>
            <div className={styles.d2}></div>
            <div className={styles.d1}></div>
            <div className={styles.d2}></div>
        </div>
        <div className={styles.animation}>
            <div className={styles.d2}></div>
            <div className={styles.d1}></div>
            <div className={styles.d2}></div>
            <div className={styles.d1}></div>
        </div>
            <div><h2>{props.headerName}</h2></div>
        <div className={styles.line}></div>
    </div>
};

export default HeaderTitle;