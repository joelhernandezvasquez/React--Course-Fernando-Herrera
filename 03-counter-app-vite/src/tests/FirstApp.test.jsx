import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Test in <FirstApp/>', () => 
{ 
    // test('should match with the snapshot', () => 
    // { 
    //     const title = 'Hola, Soy Goku'
    //    const {container} = render(<FirstApp title = {title}/>)
    //    expect(container).toMatchSnapshot()
    //  })

     test('it should show the title with a h1',()=>{
        const title ='Hola, Soy Goku'
       const {getByText,getByTestId} = render(<FirstApp title ={title}/>)
       expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
    
    })

    
    test('it should show the subtitle send by props',()=>{
        const title ='Hola, Soy Goku'
        const  subTitle = 'Hey I am Joel';
      const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle}/>)
      
      expect(getAllByText(subTitle).length).toBe(2);
    })


})