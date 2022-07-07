import React from 'react'



export const ViewSelectCharacter = ({ character }) => {

  

  return (
    <div className='container card bg-ligth text-black l-auto mt-3'     Style="width: 21rem;">
     
      <div className='card mt-2'>
      <h1 className='card-title'>{character.name}</h1>
      <img src={character.image} alt="" className=' card m-1'/></div>
      <h3>
        <div className={character.status !== 'Alive' ? ('card red'):('card green mt-1')}>{character.status}
        </div>
      </h3>
      <div className='container card bg-ligth text-black mb-2'>
        <h6><strong>Specie Character: </strong>{character.species}</h6>
        <h6><strong>Gender Character: </strong>{character.gender}</h6>
        <h6><strong>Origin Character: </strong>{character.origin.name}</h6>
        <h6><strong>Location Character: </strong>{character.location.name}</h6>
      </div>
    </div>
    
  )
}
