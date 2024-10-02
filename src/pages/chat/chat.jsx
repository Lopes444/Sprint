import React from 'react';

const About = () => {
  return (
    <div style={{
        position: 'relative',
        height: '90vh',
        paddingRight: '10vh',
        backgroundImage: 'url(./tela-chat/fundo-da-tela-chat.png)',
        backgroundSize: 'cover',  
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}>

      <main className='top-bar-chat'>
        <img src="./tela-chat/base-fundo-chat" alt="" />
      </main>

    </div>
  );
};

export default About;
