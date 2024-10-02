import React from 'react';

const Home = () => {
  return (
    <div style={{
      position: 'relative',
      height: '90vh',
      backgroundImage: 'url(./tela-fundo-inicio/fundo.png)',
      backgroundSize: 'cover',  
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>

      <div className='bola-inicio' style={{
        position: 'absolute',
        zIndex: 1,  
        top: '50vh', 
        cursor: 'pointer'
      }}>
        <img src="./tela-fundo-inicio/bola-jogos.png" alt="" width={'100vh'} />
      </div>

      <div className='capivara-inicio' style={{
        position: 'absolute',
        zIndex: 2, 
        left: '15vh',
      }}>
        <img src="./tela-fundo-inicio/capivara-img.png" alt="" width={'200vh'} />
      </div>

      <div className='moveis-quarto' style={{
        position: 'absolute',
        zIndex: 0, 
        bottom: 0,
        left: '10vh',
      }}>
      </div>

    </div>
  );
};

export default Home;
