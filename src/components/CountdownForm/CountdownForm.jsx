import React, { useState } from 'react';
import styles from './CountdownForm.module.css';

import messages from '../../utils/message';

const CountdownForm = ({ setTargetDate }) => {
    const [dateTime, setDateTime] = useState('');
    const [error, setError] = useState('');

    const handleDateTimeChange = (e) => {
        setDateTime(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const targetDateTime = new Date(dateTime);

        // Validate if the target date is not in the past
        if (targetDateTime.getTime() <= new Date().getTime()) {
            setError(messages.futureDateError);
            return;
        }

        // Validate if the target date is within the maximum range (99 days)
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 99);
        if (targetDateTime > maxDate) {
            setError(messages.maxRangeError);
            return;
        }

        setTargetDate(targetDateTime);
    };

    return (
        <form className={styles.countdown_form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="datetime-local"
                value={dateTime}
                onChange={handleDateTimeChange}
                required
            />
            {error && <p className={styles.error_message}>{error}</p>}
            <button className={styles.button} type="submit">Start Timer</button>
        </form>
    );
};

export default CountdownForm;
