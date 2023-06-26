import React from 'react';
import './App.css';
import InputField from './components/InputField';

const  App:React.FC =()=> {

  return (
    <div className="App">
     <div className='d-flex justify-content-center'>Taskify</div>
     <InputField/>
    </div>
  );
}

export default App;
