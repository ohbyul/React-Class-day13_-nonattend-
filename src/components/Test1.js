import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const [ msg , setMsg] = useState('메세지')
    const [ isShow , setIsShow] = useState( false )
    const onMsg1 = () => {
        const result = window.confirm('전부 삭제하시겠습니까?')
        if( result ) {
            setMsg('예 전부 삭제해주세요')
            setIsShow( true )
        }else {
            return 
        }
    }

    const onMsg2 = ()  => {
        const result = window.confirm(' 전부 복구하시겠습니까? ')
        if( result ) {
            setMsg('예 전부 복구해주세요')
            setIsShow( true )
        }else{
            return 
        }
    }

    return (
        <div>
            <p>
                <button onClick={ onMsg1 }>출력1</button>
                <button onClick={ onMsg2 }>출력2</button>
            </p>
            <Test1Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default Test1;