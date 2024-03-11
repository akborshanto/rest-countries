import React, { useEffect, useState } from 'react'
import Country from './assets/countries/Country'
import './assets/countru-name.css'
const Countries = () => {
const [countries,setCountries]=useState([])
/* visited -countrye */
const [visitedCountries,setVisitedCountries]=useState([])
// const handleVisistedCountries=(countryu)=>{
//     console.log(countryu)
// }
/* visitFlaga */
const [visitFlag,setVisitFlag]=useState([])
const hangleFlag=(flag)=>{
 // console.log(flag)
const newFlag=[...visitFlag,flag];
setVisitFlag(newFlag)



}

const visitedHandle=(visit)=>{
const newVisit=[...visitedCountries,visit]
setVisitedCountries(newVisit)
  //setVisitedCountries(visit)

}

/* useEffects */
useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=> res.json())
.then(data=> setCountries(data))
},[])

  return (
    <div >


    
    <ul>
    {
      visitedCountries.map(li => <li>{li}</li>)
    }
    </ul>
{/* flag */}
{

visitFlag.map(img => <img src={visitFlag} className='img' key={Math.random()}></img>)

}


    <div className='country-name'>
    {
      countries.map(countrie=><Country hangleFlag={hangleFlag}  item={countrie} key={Math.random()} visitedHandle={visitedHandle}></Country>)
    }
    
    
        <h1>{countries.length}</h1>
        <h1>{visitedCountries}</h1>
    
    
    </div>


    </div>
  )
}

export default Countries
