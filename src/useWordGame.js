import {useState, useEffect, useRef} from 'react'

function useWordGame(START_TIME = 15){
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(START_TIME)
  const [isCountStarted, setIsCountStarted] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e){
    setText(e.target.value)
  }

  function calculateWordCount(text){
    const wordArr = text.trim().split(" ")
    return wordArr.filter(word => word !== "").length
  }

  function startGame(){
    setTimeRemaining(START_TIME)
    setIsCountStarted(true)
    setText("")
    console.log(isCountStarted)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setIsCountStarted(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isCountStarted && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime -1)
      }, 1000)
    } else if ( timeRemaining === 0){
      endGame()
    }
  }, [timeRemaining, isCountStarted])

  return {handleChange, 
    textBoxRef, 
    isCountStarted, 
    startGame, 
    timeRemaining, 
    wordCount,
    text}

}

export default useWordGame