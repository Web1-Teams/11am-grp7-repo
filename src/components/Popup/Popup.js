import React from "react";

import styles from './Popup.module.css'


function Popup({ onClose ,children}){
    
    return(
    <div className={styles.popoverlay} onClick={onClose}>
        <div className={styles.popcontent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.popclose} onClick={onClose}>X</button>
            {children}
        </div>
    </div>
    );
}


export default Popup;