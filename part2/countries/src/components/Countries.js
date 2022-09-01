import React from 'react'
import Button from './Button'

const Countries = ({newFilter, countries, setter}) => {
    const countriesToShow = countries.filter(
      country => country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
      )
    
    if (countriesToShow.length > 10){
      return <div>Too many matches, specify another filter</div>
    }else if (countriesToShow.length === 1){
      return showCountry(countriesToShow[0])
    }else{
      return <>
      {countriesToShow.map(country => 
        <div key={country.name.official}>
          {country.name.common} <Button text={"show"} handler={() => showCountry(country)}/>
        </div>
      )}
      </>
    }      
}

const showCountry = (country) => (
  <>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital[0]}</div>
    <div>area {country.area}</div>
    <h3>languages</h3>
    <ul>
      {Object.values(country.languages).map(language => 
        <li key={language}> {language}</li>
      )} 
    </ul>
  </>
)

export default Countries