// src/App.js
import React, { useState } from 'react';
import PetshopForm from './PetshopForm';
import ResultDisplay from './ResultDisplay';

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (date, smallDogs, largeDogs) => {
    if ( date !== "" &&  smallDogs !== "" &&  largeDogs !== ""  ){
    try{
    const response = await fetch(`http://localhost:3001/?date=${date}&smallDogs=${smallDogs}&largeDogs=${largeDogs}`);
    const data = await response.json();
    setResult(data);
    }catch(error){
      console.log(error)
    }
  }
  };

  return (
    <div>
      <h1>Find the Best Petshop</h1>
      <PetshopForm onSubmit={handleSubmit} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default App;
