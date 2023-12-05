import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1> Chai aur full stack</h1>
      <p>Jokes: {jokes.length}</p>
      
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3> {joke.title}</h3>
            <p>{joke.content }</p>
          </div>
        )
        )
      }
    </>
  )
}

export default App
