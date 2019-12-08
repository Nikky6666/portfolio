import React from 'react';
import styles from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
    const classForTheme = props.theme==="dark" ? `${styles.dark}` : `${styles.light}`;
    return  <div className={`${styles.header} ${classForTheme}`}>
            <div><h2>{props.headerName}</h2></div>
        <div className={styles.line}></div>
    </div>
};

export default HeaderTitle;