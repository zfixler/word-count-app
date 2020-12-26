import React from 'react';
import useWordGame from "./useWordGame.js"

function App() {
  const {handleChange, 
        textBoxRef, 
        isCountStarted, 
        startGame, 
        timeRemaining, 
        wordCount,
        text} = useWordGame()
        
  return (
    <div className="container">
      <h1>How many words can you type?</h1>
      <textarea 
        value={text}
        onChange={handleChange}
        ref={textBoxRef}
        disabled={!isCountStarted} />
      <button onClick={startGame}
              disabled={isCountStarted}>
                {timeRemaining > 0 ? "Start" : "Restart"}
      </button>
  <h2>Time Remainging: {timeRemaining}</h2>
      <h2>Total Words: {wordCount}</h2>
    </div>
  )
}

export default App;
