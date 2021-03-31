import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => {
    setGood(good+1)
  }

  const ClickNeutral = () => {
    setNeutral(neutral+1)
  }

  const ClickBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={ClickGood}>good</button>
        <button onClick={ClickNeutral}>neutral</button>
        <button onClick={ClickBad}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)