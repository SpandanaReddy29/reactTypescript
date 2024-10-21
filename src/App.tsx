import React from 'react';
import './App.css';
import Greet from './components/props/Greet';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import Heading from './components/props/Heading';
import Oscar from './components/props/Oscar';
import Button from './components/props/Button';
import Input from './components/props/Input';
import Container from './components/props/Container';

function App() {

  const personName = {
    first: 'Sravdana',
    last: 'Reddy'
  }

  const nameList = [
    {
      first: 'Sravan',
      last: 'Reddy'
    },
    {
      first: 'Spandana',
      last: 'Reddy'
    },
    {
      first: 'Ushika',
      last: 'Reddy'
    }
  ]

  return (
    <div className="App">
      <Greet name='Ushika' messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList name={nameList} />
      <Status status='success'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
          Hi, How are you doing
        </Heading>
      </Oscar>
      <Greet name='Ushika' isLoggedIn={false} />
      <Button handleClick={event => {
        console.log('Button Clicked', event)
      }}/>
      <Input
        value=''
        handleChange={event => console.log(event)}
      />
      <Container styles={{border: '1px solid black', padding:'1rem' }} />
    </div>
  );
}

export default App;
