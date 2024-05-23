import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

import CountdownForm from '../CountdownForm/CountdownForm';
import TimerDisplay from '../TimerDisplay/TimerDisplay';
import messages from '../../utils/message';

const Countdown = () => {
    const [targetDate, setTargetDate] = useState(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [intervalId, setIntervalId] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (targetDate) {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate.getTime() - now;

                if (distance <= 0) {
                    clearInterval(interval);
                    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    setMessage(messages.countdownOver);
                } else {
                    setTimeLeft({
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000),
                    });
                }
            }, 1000);

            setIntervalId(interval);
            return () => clearInterval(interval);
        }
    }, [targetDate]);

    const handleStop = () => {
        clearInterval(intervalId);
        setTargetDate(null);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    };

    const handleReset = () => {
        setTargetDate(null);
        setMessage('');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    };

    return (
        <div className={styles.countdown}>
            {!targetDate ? (
                <>
                    <CountdownForm setTargetDate={setTargetDate} setMessage={setMessage} />
                    {message && <div className={styles.message}>{message}</div>}
                </>
            ) : (
                <>
                    <TimerDisplay timeLeft={timeLeft} />
                    {message !== messages.countdownOver && (
                        <button onClick={handleStop}>{messages.cancelCountdown}</button>
                    )}
                </>
            )}
            {message === messages.countdownOver && (
                <div className={styles.time_over_message}>
                    <p>{message}</p>
                    <button onClick={handleReset}>{messages.startNewCountdown}</button>
                </div>
            )}
        </div>
    );
};

export default Countdown;
