import React, { Component } from 'react';
import Chord from './Chord/Chord';
import Note from './Note/Note';

import styles from './Randomizer.module.css';

class Randomizer extends Component {
    state = {
        note: "A",
        bpm: 0
    }

    // notes = [
    //     "C", "C#",
    //     "D", "Db", "D#",
    //     "E", "Eb",
    //     "F", "F#",
    //     "G", "Gb", "G#",
    //     "A", "Ab", "A#",
    //     "B", "Bb",
    // ]

    notes = [
        "C#",
        "Db", "D#",
        "Eb",
        "F#",
        "Gb", "G#",
        "Ab", "A#",
        "Bb",
    ]

    bpm = 60;
    interval;

    randomize = () => {
        return setInterval(() => {
            // console.log(this.notes[Math.floor(Math.random() * 17)]);
            this.setState({
                // note: this.notes[Math.floor(Math.random() * 17)]
                note: this.notes[Math.floor(Math.random() * 10)]
            })
        }, (60 / this.bpm) * 1000);
    }

    componentDidMount = () => {

    }

    startHandler = () => {
        this.interval = this.randomize(this.bpm);
    }

    stopHandler = () => {
        clearInterval(this.interval);
    }

    changeHandler = (event) => {
        // console.log(event.target.value);
        // if (event.target.value < 60) {
        //     this.bpm = 30;
        // }
        // else {
        //     this.bpm = event.target.value;
        // }
        this.bpm = event.target.value;
        clearInterval(this.interval);
        this.interval = this.randomize();
    }

    render() {
        return (
            <div className={styles.randomizer}>
                {/* <h1 className={styles.title}>Randomizer</h1> */}
                <form className={styles.form}>
                    <label>BPM</label>
                    <input className={styles.inputBpm} type="number" onChange={this.changeHandler} />
                </form>
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