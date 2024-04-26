import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';

import ieeecsLogo from './assets/ieeecslogo.png'; // Import ieeecslogo.png
import helloLogo from './assets/image.png'; // Import hello.png
import nitin from './assets/nitin.mp3';
import rickroll from './assets/haha.mp4';
import helloworld from './assets/hellonitin.mp3';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [card, setCards] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen width

  const fetchData = async () => {
    let a = await fetch('https://meowfacts.herokuapp.com/?count=84');
    let data = await a.json();
    setCards(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchData();
    // Event listener for screen width change
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      {screenWidth < 400 && (
        <>
          <img src={helloLogo} alt="Hello" /> {/* Use helloLogo */}
          <audio autoPlay>
            <source src={nitin} type="audio/mpeg" /> {/* Ensure correct source path */}
          </audio>
        </>
      )}
      {screenWidth >= 400 && screenWidth <= 800 && (
        <div className="container">
          {card.map((item, index) => (
            <div className="card" key={index}>
              <p className="content">{item}</p>
            </div>
          ))}
        </div>
      )}
      {screenWidth >= 800 && screenWidth<=1200 && (
        <>
        <audio autoPlay>
            <source src={helloworld} type="audio/mpeg" /> 
          </audio>
          <div className="thegreat">
          <video autoPlay muted>
            <source src={rickroll} type="video/mp4" />
          </video>
          </div>
        </>
      )}
      {screenWidth >=1200 && (
        <div className="container">
          {card.map((item, index) => (
            <div className="card" key={index}>
              <p className="content">{item}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default App;  