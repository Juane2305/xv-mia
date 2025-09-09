import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heart from '../assets/heart.json'
import Lottie from "react-lottie-player";

function PastelCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <p className="text-2xl font-semibold text-gold" data-aos="fade-in">¡Llegó el gran día!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 px-4 font-libertinus text-gold bg-darkgray" data-aos="fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5">Faltan</h2>
      <div className="flex items-center justify-center px-3 sm:px-4 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl w-full overflow-x-hidden divide-x divide-gold/90">
        <CountCard label="días" value={timeLeft.days} />
        <CountCard label="hs" value={timeLeft.hours} />
        <CountCard label="min" value={timeLeft.minutes} />
        <CountCard label="seg" value={timeLeft.seconds} />
      </div>
      <div style={{ width: 50, height: 50 }} data-aos="fade-in" className="mt-5">
        <Lottie
          loop
          play
          speed={0.4}
          animationData={heart}
          style={{ width: "100%", height: "100%"}}
        />
      </div>    </div>
  );
}

function CountCard({ label, value }) {
  const displayValue = value < 10 ? `0${value}` : `${value}`;
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 first:pl-0 last:pr-0 min-w-[72px] sm:min-w-[88px] md:min-w-[96px]">
      <span className="tabular-nums text-3xl sm:text-4xl md:text-5xl font-bold leading-none mb-2">
        {displayValue}
      </span>
      <span className="text-sm font-medium mt-2">
        {label}
      </span>
    </div>
  );
}

export default PastelCountdown;