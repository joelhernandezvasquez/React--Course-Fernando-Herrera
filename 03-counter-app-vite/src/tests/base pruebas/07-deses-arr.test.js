import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Test in 07-deses-arr', () => 
{ 

   test('should return a string and a number', () => 
   {  

       const [letters,numbers] = retornaArreglo();

       expect (typeof letters).toBe('string')
       expect(typeof numbers).toBe('number')
})
})