import { useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import addPerson from './components/addPerson'
import Button from './components/Button'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('') //store the user-submitted input
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
        <Persons newFilter={newFilter} persons={persons} />
    </div>
  )
}

export default App
