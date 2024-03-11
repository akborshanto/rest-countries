import React from 'react'
import './countriy.css'
const Country = ({item}) => {
    console.log(item.flags.png)

  return (
    <div className='country'>
    <h1>NAME:{item.name.common}</h1>
<img src={item.flags.png} alt={item.flags.alt} />
    </div>
  )
}

export default Country
