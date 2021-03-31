import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const ClickGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((good+1)*100)/(all+1))
  }

  const ClickNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0)
    setPositive(((good)*100)/(all+1))
  }

  const ClickBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-(1/22.5))
    setPositive(((good)*100)/(all+1))
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
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive} %</p>
      </div>
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)