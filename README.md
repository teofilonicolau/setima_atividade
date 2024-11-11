# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # Projeto Desafio - Praticando Conceitos Essenciais do ReactJS

Este projeto foi desenvolvido como parte do desafio proposto pela **Codifica Edu** para a prática de conceitos essenciais do ReactJS. Através de várias atividades, o projeto aborda desde componentes simples, como um contador e alteração de fundo, até interações mais complexas, como requisição de dados e navegação com abas. O objetivo foi aprofundar o conhecimento em hooks como `useState` e `useEffect`, além de aplicar práticas comuns em desenvolvimento com React.

## Descrição das Atividades

1. **Contador Simples**  
   Criação de um componente de contador com funcionalidades de incrementar e decrementar, utilizando o hook `useState`. Um desafio adicional foi garantir que o contador não fosse decrementado abaixo de zero.
   ![image](https://github.com/user-attachments/assets/0b40762a-733f-4c18-851c-62f23a06dc78)


2. **Alteração de Cor de Fundo**  
   Um componente onde a cor de fundo da página muda sempre que o usuário clica em um botão. Utilizamos `useState` para armazenar a cor atual e `useEffect` para aplicar o estilo ao fundo.
   ![image](https://github.com/user-attachments/assets/c37c588a-54e2-4419-b5c0-a6826622b65c)


3. **Lista de Tarefas**  
   Um aplicativo de lista de tarefas (to-do list) que permite adicionar e remover tarefas. A lista é gerenciada através de `useState`, com a possibilidade de marcar tarefas como concluídas e filtrar para exibir apenas as pendentes.
   ![image](https://github.com/user-attachments/assets/634766ab-413f-42a8-aa6e-4022af779fdf)


5. **Temporizador com useEffect**  
   Um temporizador que conta o tempo em segundos e exibe na tela, utilizando `useState` e `useEffect`. A funcionalidade de pausar e reiniciar o temporizador também foi implementada.

   ![image](https://github.com/user-attachments/assets/92034e5a-371f-4094-909b-d6e7dd112b05)


7. **Filtro de Lista**  
   Criação de um filtro de lista de nomes, com um campo de entrada que permite filtrar os itens com base no texto digitado. O filtro ignora maiúsculas e minúsculas.
   ![image](https://github.com/user-attachments/assets/3c559742-7941-4c8b-8184-211f5a398471)


9. **Formulário de Registro Simples**  
   Um formulário simples com campos de nome, e-mail e senha. Após o envio do formulário, uma mensagem de boas-vindas é exibida. O formulário inclui validações para garantir que todos os campos sejam preenchidos.
   ![image](https://github.com/user-attachments/assets/64ac3e5b-ba26-4aff-ac46-8b974a7df37a)


11. **Requisição de Dados Simples**  
   Componente que exibe uma lista de posts obtidos de uma API pública (JSONPlaceholder). Usando `useEffect`, a requisição é feita ao carregar o componente, e a lista de posts é renderizada. Um botão de recarregar os dados e um indicador de carregamento foram implementados.
![image](https://github.com/user-attachments/assets/36b4ca2e-3416-4917-a06a-be8a5af7855e)
![image](https://github.com/user-attachments/assets/344c6b7e-2082-4d00-9039-1fde94ab7929)




13. **Galeria de Imagens com Visualização Detalhada**  
   Uma galeria simples de imagens, onde, ao clicar em uma imagem, ela é exibida em uma visualização ampliada dentro de um modal. A navegação entre as imagens e um botão de "Fechar" no modal também foram incluídos.
![image](https://github.com/user-attachments/assets/970f9660-28f3-4b30-a9b4-b31388ab1676)

![image](https://github.com/user-attachments/assets/9a01cc35-8cc4-4c34-8c7a-3b565125d8a1)





15. **Timer com Intervalo e Alerta**  
   Um timer com contagem regressiva, onde o usuário pode definir a quantidade de segundos. Ao terminar, um alerta é exibido, e o timer pode ser pausado ou reiniciado.
![image](https://github.com/user-attachments/assets/fdb2c2a1-6cbe-43a3-82c5-e00b896840d9)


![image](https://github.com/user-attachments/assets/a828e0f5-1d89-446c-af91-d47ec6730c00)

![image](https://github.com/user-attachments/assets/3a4dd8ce-6a8d-4ce7-a9c9-cf4a72e9acd8)







17. **Componentes com Tabs Navegáveis**  
   Uma interface com abas (tabs) onde cada aba exibe um conteúdo diferente. A aba ativa é destacada visualmente. O conteúdo de cada aba é renderizado condicionalmente com base na aba selecionada.

![image](https://github.com/user-attachments/assets/d6ee03e8-ede6-4fec-bb04-0a4b320d1146)


## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```

/src /components ContadorSimples.js AlteracaoCorFundo.js ListaTarefas.js Temporizador.js FiltroLista.js FormularioRegistro.js RequisicaoDados.js GaleriaImagens.js TimerComAlerta.js TabsNavegaveis.js App.js index.js /styles App.css
```

## 
Cada componente foi colocado dentro da pasta `/components`, facilitando a organização e leitura do código.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/teofilonicolau/setima_atividade.git
   
    ```
2. Navegue até o diretório do projeto:

     ```bash
   cd setima_atividade
   
    ```
3. Instale as dependências:

    ```bash
     npm install
    
    ```

  4.Inicie o servidor de desenvolvimento:

   ```bash
     npm run dev
    
    ```

5. O projeto será executado em http://localhost:5173/

## Dependências:

 - Dependências
 - React
 - React-Router-Dom
 - CSS para estilização

## Contribuições
- Este repositório foi criado como parte de um desafio e está aberto para contribuições. Se você tiver sugestões ou melhorias, fique à vontade para abrir uma issue ou fazer um pull request.

 
   



