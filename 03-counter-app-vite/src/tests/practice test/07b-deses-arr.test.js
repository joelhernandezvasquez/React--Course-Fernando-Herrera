import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Test in 07-deses-arr', () => 

{
    test('retornaArreglo should return a string and a number',()=>{
       const [stringTest,numberTest] = retornaArreglo();
       
       expect(typeof stringTest).toBe('string');
       expect(typeof numberTest).toBe('number');
       
    })
})