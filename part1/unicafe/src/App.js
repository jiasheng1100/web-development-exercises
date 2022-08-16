import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Count = ({ text, value }) => <div>{text} {value}</div>

const Positive = ({ value }) => <div>positive {(value[0]/(value[0]+value[1]+value[2]))*100} %</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Header header={"statistics"} />
      <Count text={"good"} value={good} />
      <Count text={"neutral"} value={neutral} />
      <Count text={"bad"} value={bad} />
      <Count text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <Positive value={[good, neutral, bad]} />
      
    </div>
  )
}

export default App
