<div align="center">
  <img src="./public/logo512.png" alt="Calculator Banner" title="Calculator Banner" width="200">
</div>

<div align="center">

![Static Badge](https://img.shields.io/badge/React-blue?style=flat&logo=react&logoColor=%23ffffff&labelColor=%23222222&color=%2361DAFB) ![Static Badge](https://img.shields.io/badge/Styled--Components-pink?style=flat&logo=styled-components&logoColor=%23ffffff&labelColor=%23222222&color=%23DB7093) ![Static Badge](https://img.shields.io/badge/Font%20Awesome-green?style=flat&logo=font-awesome&logoColor=%23ffffff&labelColor=%23222222&color=%234E9A06)

</div>

# 🧮 React Calculator

> Projeto desenvolvido para ser entregue na Formação React Developer, na plataforma da [DIO](https://www.dio.me/).

## ⚒️ Ferramentas Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construir interfaces de usuário.
- **[Styled-Components](https://styled-components.com/)**: Biblioteca para estilização de componentes no React.
- **[Font Awesome](https://fontawesome.com/)**: Biblioteca de ícones.

## 📌 Funcionalidades

- **Operações Matemáticas**: Suporta operações de adição, subtração, multiplicação, divisão e porcentagem.
- **Exclusão de dígitos**: Permite apagar números individualmente.
- **Reset**: Possui um botão "AC" que limpa toda a operação.
- **Controle de Operações**: A calculadora exibe um alerta quando uma operação está pendente e impede que múltiplas operações sejam iniciadas sem finalizar a anterior.

## 💻 Estrutura do Projeto

### Lógica de Operação:

A calculadora faz uso do estado para gerenciar a operação atual, o primeiro número da operação, o número corrente e se há uma operação pendente. Isso impede que o usuário tente iniciar uma nova operação antes de finalizar a anterior, exibindo um alerta para que finalize com o botão "=".

## ⚠️ Limitação
A calculadora apenas faz uma operação por vez, por causa de limitações de lógica. 



