import React from 'react';


export const Small = React.memo(({ value }) => {

    console.log( 'me volví a renderizar ' );
    return (
        <small>{ value }</small>

    )
})