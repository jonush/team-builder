import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import Member from './Member'

const initialMemberList = [
  {
    name: 'Joe',
    email: 'joe@gmail.com',
    role: 'Product Manager',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState(initialMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = event => {
    event.preventDefault();

    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        members.map((profile, index) => {
          return (
            <Member key={index} details={profile} />
          )
        })
      }
    </div>
  );
}

export default App;
