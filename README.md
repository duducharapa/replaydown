# ReplayDown!

Uma API feita em Javascript(precisamente Express) que analisa replays de partidas do simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon")

## Como funciona?

A API possui rotas que recebem o **ID de uma partida**, por exemplo:

    oumonotype-82345404

e então retorna informações sobre o ocorrido naquela partida, como equipes, jogadores, motivo da vitória, etc.

## Rotas:

- /players/:id

## Observações e dicas:

- Devido a atualizações internas, apenas poucas rotas estão disponíveis para utilizações. Peço a paciência dos usuários.

- O simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon") possui um repositório no Github: [Repositório do Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown "Repositório do Pokémon Showdown")

## Expectativas para versões futuras:

- Finalização da versão funcional
- Adaptação de formatos ainda não funcionais na API
- Retorno de informações mais complexas
