import React, { useState } from 'react';
import Display from '../display/display.jsx';
import DrumPad from '../drum-pad/drumPad.jsx';
import heater1 from '../audio/Heater-1.mp3';
import heater2 from '../audio/Heater-2.mp3';
import heater3 from '../audio/Heater-3.mp3';
import heater4 from '../audio/Heater-4_1.mp3';
import clap from '../audio/Heater-6.mp3';
import openHH from '../audio/Dsc_Oh.mp3';
import kickNHat from '../audio/kick-hat.mp3';
import kick from '../audio/RP4_KICK_1.mp3';
import closedHH from '../audio/Cev_H2.mp3';

const drumPads = [
  { id: 'Q', mp3: heater1 },
  { id: 'W', mp3: heater2 },
  { id: 'E', mp3: heater3 },
  { id: 'A', mp3: heater4 },
  { id: 'S', mp3: clap },
  { id: 'D', mp3: openHH },
  { id: 'Z', mp3: kickNHat },
  { id: 'X', mp3: kick },
  { id: 'C', mp3: closedHH }
];

function DrumMachine() {
  const [displayText, setDisplayText] = useState('');

  const handleDisplay = (text) => {
    setDisplayText(text);
  };

  return (
    <div id="drum-machine">
      <Display displayText={displayText} />
      <div id="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad key={pad.id} id={pad.id} mp3={pad.mp3} handleDisplay={handleDisplay} />
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;