import React from 'react'
import CountryData from '../countrySpak/CountryData'

const CountryDetail = (props) => {
  //  console.log(props)
  return (
    <div>
<CountryData {...props}></CountryData>
    </div>
  )
}

export default CountryDetail
