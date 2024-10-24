import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import "./Status.css"
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return(
    <main className="status">
      <Header title="Tweet"/>
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis voluptatum nesciunt nulla in accusamus, saepe quis nostrum laborum quibusdam, sint repellendus modi. Voluptatibus quibusdam sit dolore ad dignissimos nobis." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/julia-baptista.png" alt="Julia Baptista" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>   
        </button>
      </form>
      
      {answers.map(answer => {
        return (<Tweet key={answer} content={answer} />)
      })}
    </main>  
  )
}