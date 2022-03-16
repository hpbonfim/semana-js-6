# Spotify Radio - Semana JS Expert 6.0

Seja bem vindo(a) à sexta Semana Javascript Expert. Este é o código inicial para iniciar nossa jornada.

## Preview

<img src="" />

## Checklist Features

- Web API
    - [ ] Deve atingir 100% de cobertura de código em testes
    - [ ] Deve ter testes end to end validando todas as rotas da API
    - [ ] Deve entregar arquivos estáticos como Node.js Stream
    - [ ] Deve entregar arquivos de música como Node.js Stream
    - [ ] Dado um usuário desconectado, não deve quebrar a API
    - [ ] Mesmo que vários comandos sejam disparados ao mesmo tempo, não deve quebrar a API
    - [ ] Caso aconteça um erro inesperado, a API deve continuar funcionando
    - [ ] O projeto precisa ser executado em ambientes Linux, Mac e Windows

- Web App 
    - Client
        - [ ] Deve reproduzir a transmissão
        - [ ] Não deve pausar se algum efeito for adicionado
    - Controller
        - [ ] Deve atingir 100% de cobertura de código em testes
        - [ ] Deve poder iniciar ou parar uma transmissão 
        - [ ] Deve enviar comandos para adicionar audio efeitos à uma transmissão

## Tarefas por aula

- Aula 01: Cobrir as camadas service e route com testes unitários e alcançar 100% de code coverage
- Aula 02: Manter 100% de code coverage e implementar testes e2e para toda a API
- Aula 03: implementar testes unitários para o frontend e manter 100% de code coverage

- **PLUS**: 
    - [ ] disponibilizar um novo efeito
        - [ ] adicionar um botão novo no controlador
        - [ ] adicionar um som de efeito novo para a pasta `audios/fx/`
        - [ ] republicar no heroku

### Créditos aos áudios usados

#### Transmissão 
- [English Conversation](https://youtu.be/ytmMipczEI8)

#### Efeitos
- [Applause](https://youtu.be/mMn_aYpzpG0)
- [Applause Audience](https://youtu.be/3IC76o_lhFw)
- [Boo](https://youtu.be/rYAQN11a2Dc)
- [Fart](https://youtu.be/4PnUfYhbDDM)
- [Laugh](https://youtu.be/TZ90IUrMNCo)

## FAQ 
- Rodei `npm test` mas nada acontece, o que fazer?
    - Verifique a versão do seu Node.js. Estamos usando na versão 17. Entre no [site do node.js](https://nodejs.org) e baixe a versão mais recente.