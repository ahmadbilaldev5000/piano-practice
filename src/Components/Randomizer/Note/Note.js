import React from 'react';

import styles from './Note.module.css';

const Note = (props) => {
    return (
        <div className={styles.note}>
            <p className={styles.noteText}>{props.note}</p>
            {/* <h1>NANI</h1> */}
        </div>
    )
}

export default Note;