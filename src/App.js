
import './App.css';
import NerveSelector from './nerveSelector';
import { nerves } from './nerves';

function App() {
  return (
    <div className="app-container">
      <NerveSelector nerves={nerves} />
    </div>
  );
}

export default App;
