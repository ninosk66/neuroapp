import "./App.css";
import NerveSelector from "./nerveSelector";
import Brain from './Brain'
import { nerves } from "./nerves";
import { cranialNerves } from "./cranialNerves";
import { FaBrain } from "react-icons/fa";
import { GiBrainStem } from "react-icons/gi";
import { useState } from "react";

function App() {
  const [brainVisible, setBrainVisible] = useState(false);
  const [spineVisible, setSpineVisible] = useState(false);
  const handleBrainClick = () => {
    setBrainVisible(true);
    setSpineVisible(false);
  };

  const handleSpineClick = () => {
    setBrainVisible(false);
    setSpineVisible(true);
  };

  return (
    <div className='app-container'>
      <h2>what's at risk? </h2>
      <button onClick={handleBrainClick}>
        <FaBrain size='40px' />
      </button>

      <button onClick={handleSpineClick}>
        <GiBrainStem size='40px' />
      </button>
      {brainVisible ? <Brain cranialNerves={cranialNerves} /> : null}
      {spineVisible ? <NerveSelector nerves={nerves} /> : null}
    </div>
  );
}


export default App;
