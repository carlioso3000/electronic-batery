import React, { useRef, useEffect } from 'react';

function DrumPad({ id, mp3, handleDisplay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key.toUpperCase() === id) {
      playSound();
    }
  };

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    handleDisplay(id);
  };

  return (
    <button className="drum-pad" id={id} onClick={playSound}>
      {id}
      <audio ref={audioRef} className="clip" id={id} src={mp3}></audio>
    </button>
  );
}

export default DrumPad;
