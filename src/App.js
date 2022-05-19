/*//import logo from './logo.svg';
//import './App.css';
import React, { useState} from "react";
import axios from 'axios';

function App(props) {

  const [ usuario, setusuario ] = useState('');
  
    function handlePesquisa() {
      axios.get('https://api.github.com/users/${usuario}/repos').then(response => console.log(response.data)) ;
    }
return (

    <>    

    <input className="usuarioImput" placeholder="usuário" value={usuario} onChange={e => console.log(e.target.value)} /> <br></br>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;*/

import React from "react";
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}
