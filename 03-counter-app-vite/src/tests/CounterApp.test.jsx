import { render,screen,fireEvent} from '@testing-library/react';
import {CounterApp} from '../../src/CounterApp';


describe('test in <CounterApp/>',()=>{
 
    const initialValue = 10;

   test('should match with the snapshot', () => { 
     const {container} = render(<CounterApp value={initialValue}/>);
     expect(container).toMatchSnapshot();
 })

 test('should show that value is 100', () => 
 { 
    render(<CounterApp value={100}/>);
    expect(screen.getByText(100)).toBeTruthy();
})

test('should increment when +1 button is clicked', () => 
{ 
   render(<CounterApp value={initialValue}/>);
   fireEvent.click(screen.getByText('+1'))
   expect(screen.getByText('11')).toBeTruthy();
})

test('should decrement when -1 button is clicked', () => 
{ 
   render(<CounterApp value={initialValue}/>);
   fireEvent.click(screen.getByText('-1'))
   expect(screen.getByText('9')).toBeTruthy();
})

test('should decrement when -1 button is clicked', () => 
{ 
   render(<CounterApp value={initialValue}/>);
   fireEvent.click(screen.getByText('-1'))
   expect(screen.getByText('9')).toBeTruthy();
})

test('reset button should work', () => 
{ 
   render(<CounterApp value={initialValue}/>);
   fireEvent.click(screen.getByText('+1'))
   fireEvent.click(screen.getByText('+1'))
   fireEvent.click(screen.getByText('+1'))

  fireEvent.click( screen.getByRole('button',{name:'btn-reset'}));
   expect(screen.getByText(10)).toBeTruthy();
})

})

