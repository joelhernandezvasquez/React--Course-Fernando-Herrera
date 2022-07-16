import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Test in 06-deses-obj', () => {

    test('usContext should return an object', () => { 
        
        // initialization
            const clave = '123';
            const edad =56;
       
        const usContextTest = usContext({clave,edad})

        expect(usContextTest).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    
    })
 })