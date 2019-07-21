# ReplayDown!
Uma API feita em Javascript(precisamente Express) que analisa replays de partidas do simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon")

## Atualizações
* Melhor definição de rotas
* Melhoradas as funcionalidades da classe Game

## Funcionalidades
Atualmente, a API consegue retornar informações corretas de formatos que:
* Não possuem Pokémons randômicos
* Possui contagem diferenciada de formatos normais(Ex: 1vs1)

## Como funciona?
A API possui rotas que recebem o id de uma partida, por exemplo:
    
    gen7inheritance-695181554

e então retorna informações sobre o ocorrido naquela partida, como equipes, jogadores, motivo da vitória, etc.

## Rotas:
* /all/:id
* /players/:id
* /scores/:id
* /format/:id
* /log/:id
* /teams/:id
* /winmode/:id
* /winner/:id

## Observações e dicas:
* Utilize um front-end que receba o link e repasse apenas o id para a API, assim torna o trabalho de quem realiza o upload do replay mais facilitado.

* Alguns formatos ainda não foram testados pela grande quantidade. Pretendo criar uma ferramenta de automação de testes mesmo que rústica para facilitar uma documentação de testes.

* O simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon") possui um repositório no Github: [Repositório do Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown "Repositório do Pokémon Showdown")

## Expectativas para versões futuras:
* Criação de funcionalidades para automação de teste
* Adaptação de formatos ainda não funcionais na API
* Retorno de informações mais complexas
