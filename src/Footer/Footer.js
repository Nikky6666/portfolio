import React from 'react';
import styles from './Footer.module.css';
import vk from '../Common/Photo/vk.png'
import facebook from '../Common/Photo/facebook.png'
import twitter from '../Common/Photo/twitter.png'
import telegram from '../Common/Photo/telegram.png'


class SocialNetwork extends React.Component{
    render() {
        return(
            <div className={styles.myPage}>
                <a href={this.props.link}>
                    <img src={this.props.site}/>
                </a>
            </div>
        )
    }

}

function Footer() {
  return (
     <div className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.header}><h2>Nikky</h2></div>
            <div className={styles.socialNetworks}>
                <SocialNetwork site={vk} link="https://vk.com/nika3333333"/>
                <SocialNetwork site={facebook} link="https://www.facebook.com/borbut.nika?ref=bookmarks"/>
                <SocialNetwork site={twitter} link="" />
                <SocialNetwork site={telegram} link="https://t.me/IcE_2460" />
            </div>
            <div className={styles.copyright}>
                © 2019 beingeorge, All Rights Reserved.
            </div>
        </div>
     </div>

  );
}

export default Footer;
