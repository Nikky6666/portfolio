import React from 'react';
import styles from './Main.module.css';
import Typist from 'react-typist';
import photoMe from '../assets/Photo/me.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div id="main" className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я <span>Ника Борбут</span></span>
                        <h1>
                            <Typist className={styles.typist} startDelay={2000} avgTypingDelay={50} cursor={{ blink: true,
                                element: '|',
                                hideWhenDone: true,}}>
                            Я front-end разработчик
                            </Typist>
                            </h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image} style={{backgroundImage: `url(${photoMe})`}}></div>
                </div>
            </div>
        </div>

    );
}

export default Main;
