import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').focus();
        // console.log( inputRef );
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus  Scrren</h1>
            <hr />
            <input
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button
                onClick={ onClick }
                className="btn btn-primary"
            >
                Set focus
            </button>
        </>
    )
}

