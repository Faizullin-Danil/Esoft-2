import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isMultiple, setIsMultiple] = useState(false);
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      const mins = now.getMinutes();
      setMinutes(mins);
      setIsMultiple(mins % 5 === 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{time}</p>
      {isMultiple && <p>Время делится на 5</p>}
    </div>
  );
};

export default Clock;
