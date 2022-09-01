import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => { setCountries(response.data) })
  }
  useEffect(hook, [])

  return (
    <div>
      <Form text={"find countries"} value={newFilter} setter={setNewFilter} />
      <Countries newFilter={newFilter} countries={countries} setter={setNewFilter} />
    </div>  
  )
}

export default App;
