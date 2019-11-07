import React from 'react';
import styles from './Footer.module.css';

function SocialNetwork(props) {
    return(
        <div className={styles.myPage}>
            <img src={props.site}/>
        </div>
    )
}

function Footer() {
  return (
     <div className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.header}><h2>Nikky</h2></div>
            <div className={styles.socialNetworks}>
                <SocialNetwork site=""/>
                <SocialNetwork site=""/>
                <SocialNetwork site=""/>
                <SocialNetwork site=""/>
            </div>
            <div className={styles.copyright}>
                © 2019 beingeorge, All Rights Reserved.
            </div>
        </div>
     </div>

  );
}

export default Footer;
