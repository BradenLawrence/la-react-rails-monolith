import React, { useState, useEffect } from 'react'

const CerealsIndexContainer = props => {
  const [cereals, setCereals] = useState('')

  useEffect(() => {
    fetch('api/v1/cereals.json')
      .then(response => {
        if(response.ok) {
          return response
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(validatedResponse => validatedResponse.json())
      .then(body => setCereals(body))
      .catch(error => {
        console.log(`Error fetching cereal list: ${error.message}`)
      })
  }, [])

  const cerealTiles = cereals.map(cereal => {
    return(
      <li>
        <span><strong>Name: </strong>{cereal.name}</span><br/>
        <span><strong>Description: </strong>{cereal.description}</span>
      </li>
    )
  })

  return(
    <div>
      <h2>All Cereals:</h2>
      <ul>
        {cerealTiles}
      </ul>
    </div>
  )
}

export default CerealsIndexContainer
