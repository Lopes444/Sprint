import React from 'react';

const Profile = () => {
  return (
    <div style={{
      position: 'relative',
      height: '90vh',
      paddingRight: '10vh',
      backgroundImage: 'url(./cozinha/tela-fundo-cozinha.png)',
      backgroundSize: 'cover',  
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      
      <div>
        <main className='cozinha-info'>
          <img className='mesa' src="./cozinha/mesa.png" alt="" width={'425vh'} />
        </main>
      </div>

      <div className='capivara-cozinha'>
        <img src="./tela-fundo-inicio/capivara-img.png" alt="" width={'200vh'} />
      </div>

    </div>
  );
};

export default Profile;
