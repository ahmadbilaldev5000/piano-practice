import React, { Component } from 'react';
import Chord from './Chord/Chord';
import Note from './Note/Note';

import styles from './Randomizer.module.css';

class Randomizer extends Component {
    state = {
        note: "A"
    }
    notes = [
        "C", "C#",
        "D", "Db", "D#",
        "E", "Eb",
        "F", "F#",
        "G", "Gb", "G#",
        "A", "Ab", "A#",
        "B", "Bb",
    ]
    interval;

    randomize = (bpm) => {
        return setInterval(() => {
            // console.log(this.notes[Math.floor(Math.random() * 17)]);
            this.setState({
                note: this.notes[Math.floor(Math.random() * 17)]
            })
        }, bpm);
    }

    componentDidMount = () => {
        
    }

    startHandler = () => {
        this.interval = this.randomize(1000);
    }

    stopHandler = () => {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={styles.randomizer}>
                {/* <h1 className={styles.title}>Randomizer</h1> */}
                <div className={styles.note}>
                    <Note note={this.state.note} />
                </div>
                <div className={styles.buttonGroup}>
                    <button onClick={this.startHandler} className={styles.button}>Start</button>
                    <button onClick={this.stopHandler} className={styles.button}>Stop</button>
                </div>
                {/* <Chord /> */}
            </div>
        )
    }
}

export default Randomizer;