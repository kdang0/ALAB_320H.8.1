import { useState, useEffect } from 'react';
import './App.css'
import { getAllStarships } from './services/sw-api';
import Card from './components/Card';

interface starship{
  name: string
}


function App() {
  const [starships, setStarships] = useState<starship[]>([]);

  const updateShips = async () => {
    const ships : starship[] = await getAllStarships();
    setStarships(ships);
  }

  useEffect(() => {
    updateShips();    
  }, []);

  const starshipCards = starships.map((starship, index : number) => {
      return(
        <Card key={index} name={starship.name}/>
      );
  })
  return (
    <div>
      <h1 className='title'>Star Wars Starships</h1>
     <div className='container'>
      {starshipCards}
     </div>
    </div>
  )
}

export default App
