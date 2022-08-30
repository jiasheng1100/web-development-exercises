const addPerson = (persons, newName, newNum, setNewName, setNewNum, setPersons) => (event) => {    
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

export default addPerson