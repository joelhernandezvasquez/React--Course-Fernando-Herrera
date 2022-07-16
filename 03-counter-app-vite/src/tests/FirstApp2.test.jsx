import { render,screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Test in <FirstApp/>', () => 
{ 
  const title = 'Hola, Soy Goku';  
  const subTitle = 'Hey I am Joel nice to meet you';
  
  test('should match with the snapshot', () =>
     { 
        const {container} = render(<FirstApp title = {title}/>)
        expect(container).toMatchSnapshot();
      })

      test('should show the message "Hola, Soy Goku"',()=>{
        render(<FirstApp title = {title}/>);
        expect(screen.getByText(title)).toBeTruthy();
      })

      test('should show the title inside a h1',()=>{
        render(<FirstApp title = {title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
      })

      test('should show the subtitle sent by Props',()=>{
        render(<FirstApp title = {title} subTitle={subTitle}/>);
        expect(screen.getAllByText(subTitle).length).toBe(2);
      })

})