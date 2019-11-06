import React from 'react';
import styles from './Header.module.css';
import NawMenu from "./NawMenu/NawMenu";


function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NawMenu/>
            </div>
        </div>

    );
}

export default Header;
