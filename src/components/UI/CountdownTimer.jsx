import React, { useState, useEffect } from 'react';

// Countdown Timer
export default function CountdownTimer({
  expiryDate,
  className = 'de_countdown de_countdown--monospace',
}) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!expiryDate) {
      return;
    }

    let interval;

    // Update Timer
    const updateTimer = () => {
      const difference = new Date(expiryDate).getTime() - Date.now();

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(interval);
        return;
      }

      // Convert milliseconds into seconds, minutes, and hours
      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);

      const seconds = totalSeconds % 60;
      const minutes = totalMinutes % 60;
      const hours = Math.floor(totalMinutes / 60);

      // Format hour/minute/second string to 2 digits with leading zeros
      setTimeLeft(
        `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`,
      );
    };

    // Run updateTimer on mount
    updateTimer();

    // Set up interval to 1 second
    interval = setInterval(updateTimer, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [expiryDate]);

  if (!expiryDate) {
    return null;
  }

  return <div className={className}>{isExpired ? 'EXPIRED' : timeLeft}</div>;
}
