import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en el componente <LoginPage />', () => {

    const user = {
        id: 123,
        name: 'Estefany Yurani Tulcán Diaz',
        email: 'eytd@udenar.edu.co'
    }
    const setUserMock = jest.fn();
    
    test('debe de mostrar el componente sin el usuario', () => {
        render (
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('debe de llamar al setUser cuando se hace click en el botón ', () => {
        render (
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole( 'button' );
        fireEvent.click( button );
        expect( setUserMock ).toHaveBeenCalledWith({
            email: 'eytd@udenar.edu.co',
            id: 123,
            name: 'Estefany'
            
        })
    })
    
    
})
