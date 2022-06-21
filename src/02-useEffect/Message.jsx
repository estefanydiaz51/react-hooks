import { useEffect } from 'react';

export const Message = () => {

    useEffect( () => {

        console.log( 'message Mounted' );
        return () => {
            console.log( 'message unMounted' );
        }
    }, [] );


    return (
        <>
            <h3>Usuario ya existe!</h3>
        </>
    )
}

