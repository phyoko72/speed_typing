import React, { useEffect, useRef, useState } from 'react';
import useCustomHook from './useCustomHook';


function AppTyping() {

    const {handleInputText,
        inputText,
        startBtn,
        startNum,
        inputRef,
        handleStartBtn,
        textLength
    } = useCustomHook(10)

    console.log('inputText Outside: ',inputText);

    return ( <>
                <div className='container w-75 border mx-auto mt-5'>

                    <h1 className='text-center mb-3'>Speed Typing</h1>

                    <textarea 
                        onChange={handleInputText}
                        type='text'
                        name='inputText'
                        className='form-control mb-3'
                        value={inputText}   
                        disabled={!startBtn}
                        ref={inputRef}
                    />

                    <h4 className='mb-3'>Time Remaining: {startNum}</h4>

                    <button disabled={startBtn} onClick={handleStartBtn} className='form-control mb-3 btn btn-primary'>Start</button>

                    <h1>Word Count: {textLength} </h1>

                </div>

            </> );
}

export default AppTyping;