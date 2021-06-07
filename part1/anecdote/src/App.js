import React, { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>);
const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0,0, 0, 0, 0, 0, 0]);
  const handleRandomClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVoteClick = () => {
    let score = [...points];
    score[selected] += 1;
    setPoints(score);
  };
  console.log(points);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Button handleClick={handleRandomClick} text="Next anecdotes" />
      <Button onClick={handleVoteClick} text="Vote" />
      <h1> Anecdote With most Votes </h1>
      {anecdotes[points.indexOf(Math.max(...points))] }
      <h5>It has {points[selected]} votes</h5>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
];

export default App
