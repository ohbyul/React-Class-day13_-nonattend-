import React, { useEffect } from 'react';

const Test1Sub = ({msg, isShow, setIsShow}) => {

    useEffect( () => {
        const timer = setTimeout( () => {
            setIsShow( false )
        }, 3000)
        return() => {
            clearTimeout( timer )
        }
    }, [ isShow ] )

    return (
        <>
            {
                isShow &&  <div style={{ background:'pink', padding:15, margin:30, fontSize:20 }}>
                3초후 메세지 사라지기: {msg}
                </div>
            }
           
        </>
    );
};

export default Test1Sub;