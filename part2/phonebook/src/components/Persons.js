import React from 'react'

const Persons = ({newFilter, persons}) => {
    const personsToShow = newFilter===''
      ? persons
      : persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    return <>
      {personsToShow.map(person => 
        <div key={person.name}>{person.name} {person.number}</div>)}
    </>
}

export default Persons