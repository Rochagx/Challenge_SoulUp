# SoulUp — Gamificação que recompensa atitudes sustentáveis

## 🚀 Descrição do Projeto

O SoulUp é uma plataforma inovadora de gamificação sustentável que visa transformar ações ecológicas individuais em um impacto coletivo mensurável. Desenvolvido para incentivar e recompensar atitudes verdes, o projeto oferece um sistema onde cada gesto sustentável é validado, pontuado e integrado a um ranking, culminando em recompensas reais. A iniciativa busca fomentar uma comunidade engajada e consciente, promovendo a sustentabilidade de forma interativa e gratificante.

## 🛠️ Tecnologias Utilizadas

O projeto SoulUp é uma aplicação web estática, construída com foco na apresentação de conteúdo e interações básicas. As tecnologias empregadas incluem:

*   **HTML5**: Utilizado para a estruturação semântica e organização do conteúdo das páginas web.
*   **CSS3**: Responsável pela estilização visual, layout responsivo e elementos de design, seguindo uma arquitetura modular para facilitar a manutenção.
*   **JavaScript**: Implementado para funcionalidades interativas específicas, como a navegação do menu e outras dinâmicas da interface. É importante notar que a página "Validar Ação" foi simplificada para operar sem JavaScript, focando em um formulário estático.

## 📂 Estrutura de Pastas do Projeto

A organização do projeto segue uma estrutura lógica e modular, desenhada para otimizar o desenvolvimento e a manutenção:

```
.
├── assets/                 # Contém imagens, logotipos e outros recursos visuais do projeto.
├── css/                    # Armazena todas as folhas de estilo CSS.
│   ├── base.css            # Estilos CSS globais e componentes reutilizáveis (cabeçalho, rodapé, botões, cards, etc.).
│   ├── pages/              # Diretório para estilos CSS específicos de cada página HTML.
│   │   ├── contato.css
│   │   ├── faq.css
│   │   ├── inicio.css
│   │   ├── integrantes.css
│   │   ├── plataforma.css
│   │   ├── ranking.css
│   │   └── validar.css
│   ├── responsividade.css  # Contém todas as regras de mídia para garantir a responsividade do design.
│   └── variaveis.css       # Define variáveis de design CSS, reset de estilos e tipografia base.
├── js/                     # Inclui os arquivos JavaScript para interatividade da aplicação.
│   ├── contato.js
│   ├── icons.js
│   ├── main.js
│   ├── plataforma.js
│   └── ranking.js
├── contato.html            # Página de contato.
├── faq.html                # Página de Perguntas Frequentes.
├── index.html              # Página inicial do projeto.
├── integrantes.html        # Página com informações sobre os membros da equipe.
├── plataforma.html         # Página de apresentação da plataforma.
├── ranking.html            # Página do ranking de usuários.
├── sobre.html              # Página "Sobre" o projeto.
└── validar.html            # Página para validação de ações sustentáveis.
```

### Detalhes da Estrutura CSS

As folhas de estilo são carregadas na seguinte sequência para garantir a aplicação correta e hierárquica dos estilos:

1.  `css/variaveis.css`: Define variáveis de design globais, estilos de reset e configurações de tipografia base.
2.  `css/base.css`: Contém estilos comuns a diversas partes do site, como cabeçalho, rodapé, botões, cards, containers e animações gerais.
3.  `css/pages/<pagina>.css`: Aplica estilos exclusivos para cada página específica, garantindo a individualidade visual quando necessário.
4.  `css/responsividade.css`: Agrupa todas as regras `@media` para adaptar o layout a diferentes tamanhos de tela, assegurando a experiência responsiva.

### Observação sobre a Página "Validar Ação"

A página `validar.html` foi simplificada para funcionar como um formulário estático. Consequentemente, o arquivo `js/validar.js` e qualquer funcionalidade de bot interativo foram removidos, focando na coleta de dados sem interatividade dinâmica.

## 👥 Autores e Créditos

O projeto SoulUp foi desenvolvido pela equipe **NextCode**, composta por estudantes da turma 1TDSPO de Análise e Desenvolvimento de Sistemas da FIAP. A seguir, os membros da equipe com seus respectivos RMs e links para perfis profissionais:

| Nome                                | RM       | Turma    | LinkedIn | GitHub   |
| :---------------------------------- | :------- | :------- | :------- | :------- |
| Guilherme dos Santos Rocha          | 570005   | 1TDSPO   | [GR][li1] | [GR][gh1] |
| Giovanni Della Crucce Azevedo Santana | 572752   | 1TDSPO   [GS][li2] | [GS][gh2] |
| César Anastácio dos Anjos Ledres    | 573833   | 1TDSPO   | [CL][li3] | [CL][gh3] |
| Caio Gonçalves Feixas               | 569956   | 1TDSPO   | [CF][li4] | [CF][gh4] |
| Théo Caria Gonçalves                | 572914   | 1TDSPO   | [TC][li5] | [TC][gh5] |

## 🖼️ Imagens e Representação do Projeto

Para uma visualização do projeto, apresentamos algumas capturas de tela da interface da plataforma SoulUp:

### Dashboard da Plataforma

![Dashboard SoulUp](https://files.manuscdn.com/user_upload_by_module/session_file/310519663460776134/qEENBHSzuXbPVgbL.jpg)

*Interface da plataforma SoulUp, destacando o ranking sustentável e o sistema de gamificação ecológica.*

### Visão Geral da Aplicação

![App SoulUp em Uso](https://files.manuscdn.com/user_upload_by_module/session_file/310519663460776134/qrgoztmtPKEhXqZE.jpg)

*Representação do ecossistema SoulUp, que integra validação, recompensa e identidade verde.*

## 🔗 Link do Repositório

O código-fonte completo do projeto SoulUp está disponível publicamente no GitHub:

[https://github.com/Rochagx/Challenge_SoulUp](https://github.com/Rochagx/Challenge_SoulUp)

## 📧 Contato

Para quaisquer dúvidas, sugestões, propostas de parceria ou necessidade de suporte, a equipe NextCode pode ser contatada através dos perfis do LinkedIn dos integrantes listados acima. Alternativamente, é possível utilizar o formulário de contato disponível na página dedicada do projeto.

*   **Localização:** FIAP — Av. Paulista, 1106 — São Paulo, SP
*   **Turma:** 1TDSPO

[li1]: https://www.linkedin.com/in/guilherme-rocha-tech/ "LinkedIn de Guilherme dos Santos Rocha"
[gh1]: https://github.com/Rochagx "GitHub de Guilherme dos Santos Rocha"
[li2]: https://www.linkedin.com/in/giovanni-santana-7bb590249/ "LinkedIn de Giovanni Della Crucce Azevedo Santana"
[gh2]: https://github.com/giovannidcas "GitHub de Giovanni Della Crucce Azevedo Santana"
[li3]: https://www.linkedin.com/in/césar-ledres-679240318/ "LinkedIn de César Anastácio dos Anjos Ledres"
[gh3]: https://github.com/cesarledres "GitHub de César Anastácio dos Anjos Ledres"
[li4]: https://www.linkedin.com/in/caio-gonçalves-450008322/ "LinkedIn de Caio Gonçalves Feixas"
[gh4]: https://github.com/Caiofeixas "GitHub de Caio Gonçalves Feixas"
[li5]: https://www.linkedin.com/in/theo-caria-801834395/ "LinkedIn de Théo Caria Gonçalves"
[gh5]: https://github.com/theo4321 "GitHub de Théo Caria Gonçalves"
