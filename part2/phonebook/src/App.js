import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState(' ') //store the user-submitted input

  //an event handler to the form element
  const addName = (event) => {    
    event.preventDefault() 

    //prevent user from being able to add names that already exist in the phonebook
    if (persons.findIndex(person => person.name===newName) != -1){
      window.alert(`${newName} is already added to phonebook`)  
    }
    else
    {
      const personObject = {
        name: newName
      } 
  
      //use concat array method to avoid mutating state directly
      setPersons(persons.concat(personObject))
  
      setNewName(' ')
    }
  }

  //an event handler that synchronizes the changes made to input with the component's state
  //in order to enable editing of the input element
  const handleNameChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange} //called every time a change occurs in input element
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <>
          {persons.map(person => <div key={person.name}>{person.name}</div>)}
        </>
    </div>
  )
}

export default App
