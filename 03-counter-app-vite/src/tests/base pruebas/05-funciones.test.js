import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Test in 05-funciones', () => {

    test('getUser should return an object', () => { 
        
     //initialization
      const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      }

      const user = getUser();

      expect(user).toEqual(testUser)
    
    })

    test('getUsuarioActivo should return an object',()=>{

        //initialization

        const nombre = 'JoelHernandez98'

        const userActivo = getUsuarioActivo(nombre);

        // Assertion
        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
 })