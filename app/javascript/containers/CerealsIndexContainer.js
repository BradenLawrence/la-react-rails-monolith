import React, { useState, useEffect } from 'react'

const CerealsIndexContainer = props => {
  const [cereals, setCereals] = useState('')


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
