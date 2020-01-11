import React from 'react';
import styles from './Footer.module.css';
import vk from '../assets/Photo/vk.png'
import facebook from '../assets/Photo/facebook.png'
import twitter from '../assets/Photo/twitter.png'
import telegram from '../assets/Photo/telegram.png'
import Fade from 'react-reveal/Slide';


class SocialNetwork extends React.Component{
    render() {
        return(
            <div className={styles.myPage}>
                <a href={this.props.link}>
                    <img src={this.props.site} alt=""/>
                </a>
            </div>
        )
    }

}

function Footer() {
  return (
     <div className={styles.footer}>
         <Fade bottom>
        <div className={styles.container}>
        <div className={styles.header}><h2>Nikky</h2></div>
            <div className={styles.socialNetworks}>
                <SocialNetwork site={vk} link="https://vk.com/nika3333333"/>
                <SocialNetwork site={facebook} link="https://www.facebook.com/borbut.nika?ref=bookmarks"/>
                <SocialNetwork site={twitter} link="" />
                <SocialNetwork site={telegram} link="https://t.me/IcE_2460" />
            </div>
            <div className={styles.copyright}>
                © 2019 Все права защищены.
            </div>
        </div>
         </Fade>
     </div>

  );
}

export default Footer;
