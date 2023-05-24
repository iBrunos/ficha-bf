import React, { useState } from 'react';

function Home() {
  const [imageSrc, setImageSrc] = useState('');

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <h1>Exemplo de Inserção de Imagem em React</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      {imageSrc && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={imageSrc}
            alt="Imagem Exibida"
            style={{ border: '2px solid #000', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
