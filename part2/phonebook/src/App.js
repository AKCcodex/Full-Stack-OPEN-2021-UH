import React, { useState } from 'react'
import Person from './components/Person'
const App = () => {
  const [ persons, setPersons ] = useState([
    
  ]) 
  const [newPerson, setNewPerson] = useState(
    'a new Person...'
  ) 
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newPerson,
      date: new Date().toISOString(),
      id: persons.length + 1,
  }
  setPersons(persons.concat(personObject))
  setNewPerson('')
}
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  } 
  
  
 
  
    
  
  
  return (
    
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson  }
          onChange={handlePersonChange}
          />
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
    
    
  
  )

  
}


export default App