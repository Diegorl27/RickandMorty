import React, { useEffect, useState} from 'react'
import { Character } from '../functions/functions'
import Select from 'react-select'
import { ViewSelectCharacter } from './ViewCharcter'
import '../styleSheet/colors.css'

function SelectCharacter(){

  const [allCharacters, setCharacters] = useState(null)
  const [selectedCharacters, setSelectCharacters] = useState(null)

  useEffect(()=>{
    getData()
  },[])

  const getData = async() =>{
    const onlyCharacters = await Character()
    const characterOption = []

    for (let index = 0; index < onlyCharacters.length; index++) {
      characterOption.push ({
        label: onlyCharacters[index].name,
        value: onlyCharacters[index].id,
        ...onlyCharacters[index]
      });

    }
    setCharacters(characterOption)
  }

  console.log(allCharacters)

  return (
    <>
      {allCharacters != null ? (
        
        <div className='container card bg-secondary text-center justify-content-center mt-3' Style='width = 21rem;'>
          <div>
            {selectedCharacters != null ?
            (<ViewSelectCharacter character={selectedCharacters}/>)
            :(<div className='card mt-3'><strong className='m-5'>Selecciona un personaje</strong></div>)}
          </div>
          <div className='container-select-principal'>   
              <Select 
                className='form-select mt-3 mb-3'
                
                options = { allCharacters }
                onChange =  { (value)=>{
                setSelectCharacters(value)
              }} />         
          </div>
         
        </div>)
      :(<div className="spinner-border text-primary m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        )} 
    </>
    
  )
}



  


export default SelectCharacter



