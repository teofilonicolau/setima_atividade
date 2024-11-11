// Importa a biblioteca React e o hook useState
import React, { useState } from 'react';

// Importa o arquivo CSS para estilização do componente
import '../styles/Contador.css';

function Contador() {
  // Declara uma variavel de estado 'count' inicializada com 0
  // 'setCount' é a função usada para atualizar o valor de 'count'
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Exibe o valor atual de 'count' */}
      <h2>Contador: {count}</h2>
      
      {/* Botao para incrementar o valor de 'count' em 1 */}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      
      {/* Botao para decrementar o valor de 'count' em 1, mas apenas se 'count' for maior que 0 */}
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

// Exporta o componente 'Contador' para que ele possa ser usado em outros arquivos
export default Contador;