import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [card, setCards] = useState([])
  const fetchData = async () => {
    // let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    // let a= await fetch('https://foxes.cool/counts/fox')
    let a= await fetch('https://meowfacts.herokuapp.com/?count=84')
    let data = await a.json()
    setCards(data.data)
    console.log(data.data)
  }

  useEffect(() => {

    fetchData()

  }
    , [])
    return (
      <>
        <Navbar />
        <div className="container">
          {card.map((item, index) => (
            <div className="card" key={index}>
              {/* <h1>{item.title}</h1> */}
              <p>{item}</p>
              {/* <span>UserId {item.userId}</span> */}
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default App;