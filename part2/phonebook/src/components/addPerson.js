import personService from '../services/persons'

const addPerson = (persons, newName, newNum, setNewName, setNewNum, setPersons) => 
  (event) => {    
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

    //save the added person object to backend server
    personService
    .create(personObject)
    .then(response => {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
    })
  }
}

export default addPerson