
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading,pokemons=[],page} = useSelector(state => state.pokemons);
  
  useEffect(()=>{
     dispatch(getPokemons());
  },[])

  return (
    <>
 
     <h1>Pokemon App</h1>
   
      <hr/>
  <span> Loading:{isLoading}</span>
      <ul>
      {pokemons?.map((pokemon=>{
         return <li key={pokemon.name}>{pokemon.name}</li>
      }))}
      </ul>

      <button
      disabled = {isLoading? true:false}
      onClick = {()=> dispatch(getPokemons(page))}
      >
        Next
        
      </button>
    </>
  )
}
