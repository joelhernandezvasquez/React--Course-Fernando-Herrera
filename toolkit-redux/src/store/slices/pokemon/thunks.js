import { setPokemons, startLoadingPokemon } from "./pokemonSlice"


export const getPokemons = (page=0) =>{
 return async (dispatch,getState)=>{
   dispatch(startLoadingPokemon());

   //TODO:to do the http request
try{
    const request = await  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`)
    const response = await request.json();
    dispatch(setPokemons({
        pokemons:response.results,
        page:page + 1
    }));
}
catch(err){

}
   

   //  dispatch(setPokemons)
 }
}