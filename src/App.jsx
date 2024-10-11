import React, { useState } from 'react'
import "./App.css"
import AI from "../src/assets/gemini AI.png"
import avtar from "../src/assets/human.png"
import axios from 'axios'
const App = () => {

  const [question, setQuestion] = useState("")
  const [response,setResponse] = useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(question)
    axios.post('https://gemini-app-theta.vercel.app/get',{
      question:question
    })
    .then(res=>{
      console.log(res.data.res);
      setResponse(res.data.res);
      setQuestion('');
      
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const speakHandler = ()=>{
    const a = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(a);
  }
  return (
    <div className='App'>
      <div className="box">
        <div className="avtar">
          <img className='pic' src={avtar} />
        </div>
        <p className='label'>QUESTION</p>
        <textarea value={question} onChange={(e) => { setQuestion(e.target.value) }} />
        <button onClick={submitHandler}>Send</button>
      </div>
      <div className="box">
        <div className="avtar">
          <img className='pic' src={AI} />
        </div>
        <p className='label'>RESPONSE</p>
        <textarea value={response} />
        <button onClick={speakHandler}>Speak</button>
      </div>
    </div>
  )
}

export default App
