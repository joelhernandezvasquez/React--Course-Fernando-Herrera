

describe('Test in <DemoComponent/>', () => { 
    test('this test should not failed',()=>{
        // Initialization or Arrange
        
        const message1 = 'Hello World'
        
        // Estimulo
        const message2 = message1.trim();
     
        // Assertion which watch the behavior and wait for the desired result.
         expect(message1).toBe(message2);
     })

})

