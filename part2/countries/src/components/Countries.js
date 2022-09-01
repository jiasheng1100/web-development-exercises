import React from 'react'

const Countries = ({newFilter, countries}) => {
    const countriesToShow = countries.filter(
      country => country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
      )
    if (countriesToShow.length > 10){
      return <div>Too many matches, specify another filter</div>
    }else if (countriesToShow.length === 1){
      let country = countriesToShow[0]
      return <>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map(
          language => <li key={language}> {language} </li>
          )} 
      </ul>
      </>
    }else{
      return <>
      {countriesToShow.map(country => 
        <div key={country.name.official}>{country.name.common}</div>)}
    </>
    }    
}

export default Countries