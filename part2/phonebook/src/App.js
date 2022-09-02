import { useState, useEffect } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import addPerson from './components/addPerson'
import Button from './components/Button'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('') //store the user-submitted input
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => { setPersons(initialPersons) })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Form text={"filter shown with"} value={newFilter} setter={setNewFilter} />      
      <h3>Add</h3>
      <form>
        <Form text={"name"} value={newName} setter={setNewName} />
        <Form text={"number"} value={newNum} setter={setNewNum} />
        <Button text={"add"} handler={addPerson(persons, newName, newNum, setNewName, setNewNum, setPersons)} />
      </form>
      <h3>Numbers</h3>
        <Persons newFilter={newFilter} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
