import React, { useState } from 'react';
import '../styles/GaleriaImagens.css';
import { Link } from 'react-router-dom';

// Importando as imagens
import pernalonga from '../assets/pernalonga1.jpg';
import frajola from '../assets/frajola.jpg';
import patolino from '../assets/patolino.jpg';

const imagens = [pernalonga, frajola, patolino];

const GaleriaImagens = () => {
  const [imagemAtual, setImagemAtual] = useState(null);

  return (
    <div className="galeria-imagens">
      <h2>Galeria de Imagens</h2>
      <div className="galeria">
        {imagens.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index}`} onClick={() => setImagemAtual(src)} />
        ))}
      </div>
      {imagemAtual && (
        <div className="modal">
          <img src={imagemAtual} alt="Imagem Ampliada" />
          <button onClick={() => setImagemAtual(null)}>Fechar</button>
        </div>
      )}
      <Link to="/">
        <button className="saida">Sair</button>
      </Link>
    </div>
  );
};

export default GaleriaImagens;
