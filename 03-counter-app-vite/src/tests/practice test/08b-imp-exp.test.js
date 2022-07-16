import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes';

describe('Test in 08-imp-exp', () =>
{ 
    test('getHeroeById should return a hero filter by ID ', () => 
    { 
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id:1,name:'Batman',owner:'DC'})
     })

     test('getHeroesById should return undefined if heroes does not exist', () =>{
    const id = 1000;
    const hero = getHeroeById(id);
        expect(hero).toBe(undefined)
     })

     test('getHeroesByOwner should return an array with only DC Heroes and the lenght must be 3',()=>{
         const owner = 'DC'
         const heroesTest = getHeroesByOwner(owner);

         expect(heroesTest.length).toBe(3);
         expect(heroesTest).toEqual(heroes.filter(hero => hero.owner === owner))
     })
 })