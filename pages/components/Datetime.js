import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
    clearInterval();
  }, []);

  return (
    <div class='font-gamer flex flex-row items-end cursor-default absolute mt-6 dark:text-black text-white'>
      <span class='text-xl mb-0.5'>{currentTime.toDateString()}</span>
      <span class='ml-2 text-3xl w-20'>{currentTime.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
