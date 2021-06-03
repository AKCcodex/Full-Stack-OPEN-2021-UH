import React, { useState } from 'react'
const Statistics = ({ good, neutral, bad }) => {
    const total = neutral + good + bad;
    const Average = (good * 1) + (neutral * 0) + (bad * -1);
    const positive = `${(good / total) * 100}%`;

    if (good > 0 || neutral > 0 || bad > 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <Statistic text="Good" value={good} />
                        <Statistic text="Neutral" value={neutral} />
                        <Statistic text="Bad" value={bad} />
                        <Statistic text="All" value={total} />
                        <Statistic text="Average" value={Average} />
                        <Statistic text="Positive" value={positive} />
                    </tbody>
                </table>
            </div>
        );
    }
    return <p>No feedback given</p>;
};
const Statistic = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>);
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleGoodClick = () => setGood(good + 1);
    const handleNeutalClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);
    return (
        <div>
            <h1> Give Feedback </h1>
            <Button handleClick={handleGoodClick} text="Good" />
            <Button handleClick={handleNeutalClick} text="Neutral" />
            <Button handleClick={handleBadClick} text="Bad" />
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
};
export default App

