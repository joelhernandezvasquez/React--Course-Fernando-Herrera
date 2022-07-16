import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Test in 02-template-string', () => 
{ 
    test('getSaludo() should return a string', () => 
    { 
        const name = 'Joel';
        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola '+ name);
     })
 }

)