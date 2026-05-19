# IP Address Tracker

Este projeto é uma aplicação web para rastreamento de endereços IP em tempo real, exibindo informações de localização geográfica em um mapa interativo. A interface é contextual e dinâmica, reagindo a dados ambientais (como temperatura local) para criar uma experiência mais sensível ao contexto do usuário.

O foco foi desenvolver uma interface moderna, responsiva e fluida, aplicando conceitos de React como gerenciamento de estado, consumo de API e manipulação de efeitos visuais, além de atenção à experiência do usuário (UX).

---

## 📸 Preview

<img src="./src/assets/gifPreview.gif" alt="Preview do IP Address Tracker">


---

## 🎯 Objetivo do Projeto

Criar uma aplicação prática para consolidar conceitos fundamentais de Front-End e React, incluindo:

- Consumo de API externa (IPify e Open-Meteo)
- Gerenciamento de estado com `useState`
- Efeitos colaterais com `useEffect`
- Manipulação de mapas interativos com Leaflet
- Atualização dinâmica de dados na interface
- Tratamento de erros e feedback para o usuário
- Implementação de UX adaptativo baseado em dados reais

---


## 🛠️ Tecnologias Utilizadas

- **React.js (Vite)**
- **JavaScript (ES6+)**
- **CSS3**
  - Flexbox
  - Responsividade com Media Queries
  - Animações CSS (fade-in de erros)
- **Leaflet (React-Leaflet)**
- **IPify API**
- **Open-Meteo API**
- **Web API (Fetch)**

---

## 🎨 UX/UI e Ambient Design

Este projeto foi construído com atenção especial à experiência do usuário, implementando não apenas boas práticas de UX, mas também conceitos de **interfaces contextuais**:

**Componentes de UX padrão:**
- Feedback visual para erros de busca
- Estados de carregamento
- Transições suaves no mapa
- Layout limpo e centralizado
- Hierarquia visual clara das informações

**UX Adaptativo e Ambient UI:**
A aplicação utiliza dados da API Open-Meteo para detectar condições climáticas da localização consultada e adapta automaticamente o tema visual da interface. O sistema reage ao clima para modificar a atmosfera visual, criando uma experiência mais imersiva e dinâmica. 

---

## 📚 Possíveis Melhorias Futuras

- Implementar histórico de buscas de IP
- Criar sistema de cache para IPs recentes
- Melhorar acessibilidade (ARIA e navegação por teclado)
- Refatorar para TypeScript
- Criar testes automatizados
- Expandir os estados climáticos 

---

## 🔗 Links

- 💻 **Desafio original**  
  https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0

- 💻 Link do projeto
  https://estefpimenta.github.io/ipAddressTracker/
