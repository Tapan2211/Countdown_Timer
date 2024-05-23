import React from 'react';
import styles from './TimerDisplay.module.css';

const TimerDisplay = ({ timeLeft }) => {
    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <div className={styles.timer_display}>

            <div className={styles.timer_display}>
                <div className={styles.block}>
                    {formatTime(timeLeft.days)}
                    <span style={{ color: '#a7b1e1' }}>Days</span>
                </div>
            </div>

            <div className={styles.timer_display}>
                <div className={styles.block}>
                    {formatTime(timeLeft.hours)}
                    <span style={{ color: '#a7b1e1' }}>Hours</span>
                </div>
            </div>

            <div className={styles.timer_display}>
                <div className={styles.block}>
                    {formatTime(timeLeft.minutes)}
                    <span style={{ color: '#a7b1e1' }}>Minutes</span>
                </div>
            </div>

            <div className={styles.timer_display}>
                <div className={styles.block}>
                    {formatTime(timeLeft.seconds)}
                    <span style={{ color: '#a7b1e1' }}>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default TimerDisplay;


