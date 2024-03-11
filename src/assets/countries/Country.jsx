import React, { useState } from 'react'
import './countriy.css'
import CountryDetail from '../countryDetail/CountryDetail'
const Country = ({item,visitedHandle,hangleFlag}) => {
    //console.log(hangleFlag)
//console.log(handleVisited.target)
//console.log(visitedHandle)
const [items,setItem]=useState(false)

const handle=()=>{
setItem(!items)


}

    const {name,flags,population,cca3}=item
    //console.log(item.cca3)

  return (
    <div className={`country ${items ? 'visited' : 'non-visited'}`}>
    <h1 className={`${items && 'blue'}`}>NAME:{name.common}</h1>
<img src={flags.png} alt={item.flags.alt} />
<p style={{color:'blue'}}>population:{population}</p>
<p>{cca3}</p>
<button onClick={()=>hangleFlag(item.flags.svg)}>HANGLE FLAG</button>
<button onClick={()=>visitedHandle(item.name.common)} >Mark Visited</button>
<button onClick={handle} >{items ? "GOING":"VISITED"}</button>
{
    items ? "nadia aktyere":"akbor shanto"
    
}


<CountryDetail item={item} visitedHandle={visitedHandle}
hangleFlag={hangleFlag}
>

</CountryDetail>

    </div>
  )
}

export default Country
