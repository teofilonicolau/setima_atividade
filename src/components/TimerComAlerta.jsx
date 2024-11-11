import React, { useState, useEffect } from 'react';
import '../styles/TimerComAlerta.css';

const TimerComAlerta = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let interval = null;
    if (ativo) {
      interval = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    } else if (!ativo && segundos !== 0) {
      clearInterval(interval);
    }
    if (segundos === 0 && ativo) {
      alert("O tempo acabou!");
      setAtivo(false);
    }
    return () => clearInterval(interval);
  }, [ativo, segundos]);

  const resetar = () => {
    setSegundos(0);
    setAtivo(false);
  };

  return (
    <div className="timer-com-alerta">
      <h2>Timer: {segundos}s</h2>
      <input 
        type="number" 
        placeholder="Segundos" 
        value={segundos}
        onChange={(e) => setSegundos(Number(e.target.value))}
      />
      <button onClick={() => setAtivo(true)}>Iniciar</button>
      <button onClick={() => setAtivo(false)}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default TimerComAlerta;
