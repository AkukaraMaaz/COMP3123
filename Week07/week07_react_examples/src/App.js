import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import College from './components/college/college';
import Student from './components/student/student';
import StudentObj from './components/student/studentObj';
import Employee from './components/employee/employee';

function App() {
  let name = "Maaz Akukara"
  const myStyle = {color:'red',fontSize:50}
  const studObj = { 
    fnm: "Triet" , 
    lnm: "Luu" , 
    city:"Toronto"
  }
  return (
    <Fragment>
        <h1 style={{color:'blue',fontSize:30}}>Hello, React JS</h1>
        {/* <img src= {logo} alt='Image'/> */}
      <h2 style={myStyle}>{name}</h2>
      <Employee/>
      <College/>
      <Student fnm="Maaz" lnm="Akukara"/>
      <StudentObj stud = {{ fnm: "Sokmontrey" , lnm: "Sythat" , city:"Toronto"}}/>
      <StudentObj stud = { studObj }/>
    </Fragment>

  );
}

export default App;
