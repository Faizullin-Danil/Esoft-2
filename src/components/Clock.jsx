import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{time.toLocaleString()}</p>
      {time.getMinutes() % 5 === 0 && <p>Время делится на 5</p>}
    </div>
  );
};

export default Clock;
