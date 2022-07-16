import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Test in 05-funciones', () =>
{ 
test('getUser() should return an object',()=>{

    const user = {
        uid: 'ABC123',
        username: 'El_Papi1502'
     }

     const getUserTest = getUser();
     expect(getUserTest).toEqual(user);
})

test("getUsuarioActivo should return an object",()=>{

    const name = 'Joel';

    const getUsuarioTest = getUsuarioActivo(name);
    expect(getUsuarioTest).toEqual({
        uid: 'ABC567',
        username: name
    })
})
 })