import React from 'react';
import styles from './Button.module.css';


class Button extends React.Component {

    state = {
        classForButton: this.props.theme === "dark"? styles.dark : styles.light
    };

    onMouseDown = () => {
        this.setState({classForButton: styles.clicked})
    };

    onMouseUp = () => {
        this.setState({classForButton: this.props.theme === "dark"? styles.dark : styles.light})
    };

     render() {
         return <div className={styles.button}>
             <button onMouseUp={this.onMouseUp}
                     onMouseDown={this.onMouseDown}
                     className={this.state.classForButton}>{this.props.name}</button>
         </div>
     }
}
/*(props) {
   const classForButton = props.theme === "dark"? styles.dark : styles.light;
  return (
     <div className={styles.button}>
         <button onClick={} className={classForButton}>{props.name}</button>
     </div>

  );
}
*/
export default Button;
