import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Test in 09-promesas', () => 
{ 
    test('getHeroeByIdAsync() return a hero ', async() => {

        const id = 1;
        const getHeroesTest = await getHeroeByIdAsync(id);
        expect(getHeroesTest).toEqual({  id: 1,
            name: 'Batman',
            owner: 'DC'
        })

     })

     test('getHeroeByIdAsync() should return an error if hero does not exist ', (done) =>{
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error =>
        {
            expect(error).toBe('No se pudo encontrar el héroe'+ id)
            done();
        })
        
     })
 })