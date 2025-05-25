import React, { useEffect, useState } from 'react';

const CountdownToDate = () => {
    const [timeLeft, setTimeLeft] = useState(0);

    // Convert IST target time to UTC-based Date object
    const targetTimeIST = new Date('2025-05-27T02:30:00Z');
    // 8:00 AM IST is 02:30 AM UTC

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = Math.max(0, Math.floor((targetTimeIST - now) / 1000));
            setTimeLeft(diff);

            if (diff <= 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${days}d ${hrs.toString().padStart(2, '0')}h ${mins
            .toString()
            .padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    };

    return (
        <div className="text-2xl text-center text-transparent bg-clip-text font-bold mx-30 mr-40 ml-40"
            style={{
                backgroundImage:
                    'linear-gradient(to right, red, orange, red, orange, pink, yellow, red)',
            }}>
            Will be Available in: {formatTime(timeLeft)}
        </div>
    );
};

export default CountdownToDate;
