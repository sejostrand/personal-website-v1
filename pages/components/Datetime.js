import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
    clearInterval();
  }, []);

  return (
    <div class='font-gamer flex flex-row items-end cursor-default'>
      <span class='text-xl mb-0.5'>{currentTime.toDateString()}</span>
      <span class='ml-2 text-3xl'>{currentTime.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
