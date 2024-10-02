import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../jogos/jogos';
import Profile from '../comer/comer';
import Settings from '../Dormir/dormir';
import About from '../chat/chat';

const App = () => {
  return (
    <Router>
      <main className='tela-toda'>
        <div className='tudo' style={{
          width: '425px',
          height: '700px',
          display: 'block',
          margin: 'auto',
        }}>
         
          <div style={{
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            
            <nav style={{
              position: 'absolute',
              height: '400px'
              
            }}>
              <main className='botoes' style={
                {
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '80vh 0vh 0vh 13vh',
                  zIndex: '1'
                }
              }>
                <Link to="/" style={{ marginRight: '10px' }}>
                  <img src="./tela-fundo-inicio/btn-jogos.png" width="50vh" alt="" /></Link>
                <Link to="/profile" style={{ marginRight: '10px' }}>
                  <img src="./tela-fundo-inicio/btn-comida.png" width="50vh" alt="" /></Link>
                <Link to="/about" style={{ marginRight: '10px' }}>
                  <img src="./tela-fundo-inicio/btn-chat.png" width="50vh" alt="" /></Link>
                <Link to="/settings" >
                  <img src="./tela-fundo-inicio/btn-dormir.png" width="50vh" alt="" /></Link>
              </main>
            </nav>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
