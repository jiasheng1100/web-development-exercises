import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  if (text==="positive"){
    return(
      <div>{text} {value} %</div>
    )
  }
  return(
    <div>{text} {value}</div>
  )
}

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
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text={"positive"} value={(good/(good+neutral+bad))*100}/>
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
