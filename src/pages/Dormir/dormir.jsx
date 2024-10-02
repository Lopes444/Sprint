import React, { useState } from 'react';

const Settings = () => {
  
    const [background, setBackground] = useState('url(./tela-quarto/manha/tela-manha.png)');

    const toggleBackground = () => {
        setBackground(current => 
            current === 'url(./tela-quarto/manha/tela-manha.png)' 
            ? 'url(./tela-quarto/noite/tela-noite.png)' 
            : 'url(./tela-quarto/manha/tela-manha.png)'
        );
    };

    return (
        <>
            <div style={{
                position: 'relative',
                height: '90vh',
                paddingRight: '10vh',
                backgroundImage: background,
                backgroundSize: 'cover',  
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}>
            </div>

            <div className='cama-quarto'>
                <img src="./tela-quarto/caminha.png" alt="" width={'300vh'} />
            </div>

            <div className='corda-quarto' onClick={toggleBackground}>
                <img src="./tela-quarto/cordinha.png" alt="" width={'30vh'} style={{cursor: 'pointer'}} />
            </div>

            <div className='capivara-quarto'>
                <img src="./tela-fundo-inicio/capivara-img.png" alt="" width={'200vh'} />
            </div>
        </>
    );
};

export default Settings;
