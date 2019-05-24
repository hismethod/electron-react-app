import React from 'react';
import './App.css';

import {shell} from 'electron';
import os from 'os';

const openHomeDir = () => {
  shell.showItemInFolder(os.homedir());
}

function App() {
  return (
    <div className="App">
      <button onClick={openHomeDir}>{os.homedir()}</button>
    </div>
  );
}

export default App;
