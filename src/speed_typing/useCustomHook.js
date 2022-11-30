import { useEffect, useRef, useState } from "react"

function useCustomHook(startingTime = 5) {
    
    const [inputText,setInputText] = useState('')
    const [textLength,setTextLength] = useState(0)
    const [startNum,setStartNum] = useState(startingTime)
    const [startBtn,setStartBtn] = useState(false)
    const inputRef = useRef(null)

    console.log('inputRef: ',inputRef);

    const handleInputText = e =>{
        setInputText(e.target.value)
    }
  
    const handleCount = () =>{
        const wordCount = inputText.trim().split(" ").filter(x=> x !== '')
        console.log('wordCount: ',wordCount);
        setTextLength(wordCount.length)
    }

    const handleStartBtn = () =>{
        setStartBtn(true)
        setInputText('')
        setStartNum(startingTime)
        setTextLength(0)
        inputRef.current.disabled = false
        inputRef.current.focus()
        console.log(startBtn);
    }

    const endGame = () =>{
        setStartBtn(false)
        setStartNum(0)
    }

    useEffect(()=>{
        if(startNum>0 && startBtn){
            setTimeout(() => {
                setStartNum(prevNum=>prevNum-1)
            }, 1000);            
        }else if(startNum===0){
            endGame()
            handleCount()
            console.log('textLength: ',textLength);
        }
    },[startNum,startBtn])
    return {    handleInputText,
                inputText,
                startBtn,
                startNum,
                inputRef,
                handleStartBtn,
                textLength
            };
}

export default useCustomHook;