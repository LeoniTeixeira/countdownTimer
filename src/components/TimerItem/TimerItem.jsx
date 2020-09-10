import React, { useState, useEffect } from 'react';

function TimerItem(props) {
  function calculateTimeLeft()  {
    const difference = +new Date(props.date) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <li>
      <h1> { props.description } {timerComponents.length ? timerComponents : "Contador Finalizado!"}  </h1> 
      <button onClick={() => props.handleDelete(props.id)}>X</button>
    </li>
  )
}

export default TimerItem;