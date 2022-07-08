import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        console.log( result );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => {

        const value = 100;

        const { result } = renderHook( () => useCounter( value ) );
        const { counter, decrement, increment, reset } = result.current;
        expect( counter ).toBe( 100 )
    });

    test('debe de incrementar el contador ', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, increment } = result.current;
        act( () => {
            increment();
            increment( 2 );

        })
        expect( result.current.counter ).toBe( 103 );
    });

    test('debe de decrementar el contador ', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, decrement } = result.current;
        act( () => {
            decrement();
            decrement( 2 );

        })
        expect( result.current.counter ).toBe( 97 );
    });

    test('debe de restablecer el reset ', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, decrement, reset } = result.current;
        act( () => {
            decrement();
            reset();
        })
        expect( result.current.counter ).toBe( 100 );
    });

    
    
    
    
})
