import { useState } from 'react'

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

  //an event handler to the form element
  const addPerson = (event) => {    
    event.preventDefault() 

    //prevent user from being able to add names that already exist in the phonebook
    if (persons.findIndex(person => person.name===newName) !== -1){
      window.alert(`${newName} is already added to phonebook`)  
    }
    else
    {
      const personObject = {
        name: newName,
        number: newNum
      } 
  
      //use concat array method to avoid mutating state directly
      setPersons(persons.concat(personObject))
  
      setNewName('')
      setNewNum('')
    }
  }

  //an event handler that synchronizes the changes made to input with the component's state
  //in order to enable editing of the input element
  const handleNameChange = (event) => {      
    setNewName(event.target.value)  
  }

  const handleNumChange = (event) => {       
    setNewNum(event.target.value)  
  }

  const handleFilterChange = (event) => {       
    setNewFilter(event.target.value) 
  }

  const personsToShow = newFilter===''
    ? persons
    : persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)

  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with <input 
            value={newFilter}
            onChange={handleFilterChange} //called every time a change occurs in input element
          />
      <h2>Add</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange} //called every time a change occurs in input element
          />
          </div>
          <div>
          number: 
          <input 
            value={newNum}
            onChange={handleNumChange} //called every time a change occurs in input element
          />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <>
        {personsToShow.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
        </>
    </div>
  )
}

export default App
