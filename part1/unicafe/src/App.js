import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Count = ({ text, value }) => <div>{text} {value}</div>

const Positive = ({good, neutral, bad}) => <div>positive {(good/(good+neutral+bad))*100} %</div>

const Statistics = ({ good, neutral, bad }) => {
  if (good===0 && neutral===0 && bad===0){
    return (
      <div>
        <Header header={"statistics"} />
        No feedback given
      </div>
    )
  }

  return(  
    <div>
      <Header header={"statistics"} />
      <Count text={"good"} value={good} />
      <Count text={"neutral"} value={neutral} />
      <Count text={"bad"} value={bad} />
      <Count text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <Positive good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />     
    </div>
  )
}

export default App
