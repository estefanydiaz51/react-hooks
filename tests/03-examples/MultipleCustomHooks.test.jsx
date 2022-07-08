import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock( '../../src/hooks/useFetch' );
jest.mock( '../../src/hooks/useCounter' );


describe('pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render( <MultipleCustomHooks />);
        expect( screen.getByText( 'Loading' ) );
        expect( screen.getByText( 'BreakingBad Quotes' ) );

        // button desabilitado

        const nextButton = screen.getByRole( 'button', { name: 'Next quote' } );
        expect( nextButton.disabled ).toBeTruthy();
    });
    
    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Estefany', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        });
        render( <MultipleCustomHooks />);
        expect( screen.getByText('hola mundo')).toBeTruthy();
        expect( screen.getByText('Estefany')).toBeTruthy();

        const nextButton = screen.getByRole( 'button', { name: 'Next quote' } );
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Estefany', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole( 'button', { name: 'Next quote' } );

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled()
    })
    
    
    
})
