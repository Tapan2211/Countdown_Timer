import logo from './logo.svg';
import './App.css';

import Countdown from './components/Countdown/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown <span style={{ color: '#ee10ff' }}>Timer</span></h1>
      </header>
      <Countdown />
    </div>
  );
}

export default App;
