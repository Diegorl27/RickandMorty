import axios from "axios";

const Character = async () =>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/')
    return peticion.data.results
}

export {
    Character
}