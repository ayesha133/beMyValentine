import logo from './img/stickMan.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import anotherLogo from './img/flowerCouch.jpg';
import bears from './img/twoBear.gif';

const phrases = ["No", "DONT DO THIS TO ME",
 "\"it was never that serious\" Yes IT IS",
  "I'm gonna cry",
   "I'm your biggest fan",
  "Fine just say you hate me",
"Girl be fr", 
"Yusra PLEASE"];

function App() {
  const [buttonPosition, setButtonPosition] = useState({ left: '53%', top: '71%' });
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo);
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleNoButtonHover = () => {
    // Calculate new random position
    const newLeft = Math.random() * 90 + '%';
    const newTop = Math.random() * 90 + '%';

    // Update the button position and change the text content
    setButtonPosition({ left: newLeft, top: newTop });
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  const handleTakeMeThereClick = () => {
    // Change the logo, background color, and set open to true
    setLogoSrc(anotherLogo);
    setBackgroundColor('#FBCEB1');
    setOpen(!open);
    setOpen2(true);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor }}>
        <img src={logoSrc} className="App-logo" alt="logo" />
        <p>
          <code style={{color: '#00308F'}}>
            {open2
              ? "YYYAAYYYYYYY"
              : "Will you be my Valentine Yusra? :)"}
          </code>
        </p>
        {!open2 && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              variant="success"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Yes
            </Button>
            <Button
              variant="danger"
              className="no-button"
              style={{ left: buttonPosition.left, top: buttonPosition.top }}
              onMouseOver={handleNoButtonHover}
            >
              {phrases[currentPhraseIndex]}
            </Button>
          </div>
        )}

        <div>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '400px', fontSize: '14px' }}>
                This means maybe...we could be flowers in another universe too?
                <br />
                <Button variant="info" onClick={handleTakeMeThereClick}>
                  Take me there
                </Button>
              </Card>
            </div>
          </Collapse>
        </div>
        {open2 && <img src={bears} className="bear-image" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
