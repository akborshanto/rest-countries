import React, { useEffect, useState } from 'react'
import Country from './assets/countries/Country'

const Countries = () => {
const [countries,setCountries]=useState([])

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=> res.json())
.then(data=> setCountries(data))


},[])

  return (
    <div>
{
  countries.map(countrie=><Country item={countrie} key={Math.random()}></Country>)
}


    <h1>{countries.length}</h1>
    </div>
  )
}

export default Countries