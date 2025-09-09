import React from 'react';
import Lottie from 'react-lottie-player';

import miAnimacion from '../assets/envelope.json';

const MiIconoGift = () => {
  return (
    <div style={{ width: 120, height: 120 }}>
      <Lottie
        loop
        play
        animationData={miAnimacion}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default MiIconoGift;