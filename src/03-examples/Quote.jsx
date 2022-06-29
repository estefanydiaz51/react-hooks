import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {
    const pRef = useRef();
    const [ boxSize, SetBoxSize ] =  useState( { width: 0, height: 0 } );

    useLayoutEffect ( ( ) => {
        const { width, height } =  pRef.current.getBoundingClientRect();
        SetBoxSize( width, height );
    }, [quote])


    return (
        <>
            <blockquote 
                className='blockquote text-end'
                style={{ display: 'flex' }}
            >
                <p ref={ pRef } className='mb-1'>{ author }</p>
                <footer className='blockquote-footer'>
                    { quote }
                </footer>
            </blockquote>
            <code>
                { JSON.stringify( boxSize ) }
            </code>

        </>
    )
}

