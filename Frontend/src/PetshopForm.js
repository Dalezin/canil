// src/PetshopForm.js
import React, { useState } from 'react'

const PetshopForm = ({ onSubmit }) => {
  const [date, setDate] = useState('')
  const [smallDogs, setSmallDogs] = useState('')
  const [largeDogs, setLargeDogs] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(date, smallDogs, largeDogs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <label >
          Date:{'  '}
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
          <br />
        </label>
        <label>
          Small Dogs:{'  '}
          <input type="number" value={smallDogs} onChange={(e) => setSmallDogs(e.target.value)} />
          <br />
        </label>
        <label>
          Large Dogs:{'  '}
          <input type="number" value={largeDogs} onChange={(e) => setLargeDogs(e.target.value)} />
          <br />
        </label>
        <button type="submit">Calculate</button>
        <br />
      </div>
    </form>
  )
}

export default PetshopForm
