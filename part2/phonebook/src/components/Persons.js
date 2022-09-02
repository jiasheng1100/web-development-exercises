import React from 'react'
import Button from './Button'
import personService from '../services/persons'


const Persons = ({newFilter, persons, setPersons}) => {
    const personsToShow = newFilter===''
      ? persons
      : persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    return <>
      {personsToShow.map(person => <div key={person.name}>{person.name} {person.number} <Button text={"delete"} handler={() => deletePerson(person.id, persons, setPersons)}/></div>)}
    </>
}

const deletePerson = (id, persons, setPersons) => {
  personService
    .remove(id)
    .then(setPersons(persons.filter(person => person.id !== id)))
    .catch(error=>{
      console.log(error)
    })
}

export default Persons