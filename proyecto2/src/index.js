import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const maxVotes = (prev, current) => {
  return (prev.vote > current.vote) ? prev : current
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const App = (props) => {
  const [datos, setDatos] = useState(props.anecdotes)
  const [selected, setSelected] = useState(getRandomInt(0, datos.length))
  const [masVotado, setMasVotado] = useState(datos[selected])

  const handleNextClick = () => {
    const random = getRandomInt(0, datos.length)
    setSelected(random)
  }

  const handleVoteClick = () => {
    let newArray = [...datos]
    newArray[selected].vote += 1
    setDatos(newArray)

    const resume = newArray.reduce(maxVotes)
    setMasVotado(resume)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br/>
      {datos[selected].anecdote}
      <br/>
      <p>tiene {datos[selected].vote} votos</p>
      <button onClick={handleVoteClick}>votos</button>
      <button onClick={handleNextClick}>siguiente anecdota</button>
      <br/>
      <h1>Anecdote with most votes</h1>
      <p>{masVotado.anecdote}</p>
      <p>tiene {masVotado.vote} votos</p>
    </div>
  )
}

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    vote: 0,
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    vote:  0,
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    vote: 0,
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    vote: 0,
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    vote: 0,
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    vote: 0,
  },
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)