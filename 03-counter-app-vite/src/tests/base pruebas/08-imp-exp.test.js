import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../../src/data/heroes';

describe('Test in 08-imp-exp', () => 
{ 
   test('getHeroesById should return a Hero by ID', () => 
{ 
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({id:1,name:'Batman',owner:'DC'})
})

test('getHeroesById should return undefined if heroes does not exist', () => 
{ 
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
})

 test('getHeroesByOwner should return an array with only DC Heroes and the lenght must be 3',()=>{

    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual(heroes.filter(hero => hero.owner === owner))
 })

 test('getHeroesByOwner should return an array with only Marvel Heroes and the lenght must be 2',()=>{

    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
   
    expect(heroesMarvel.length).toBe(2);
    expect(heroesMarvel).toEqual(heroes.filter(hero => hero.owner === 'Marvel'))
 })



})