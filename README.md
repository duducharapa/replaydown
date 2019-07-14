# ReplayDown!
Uma API feita em Javascript(precisamente Express) que analisa replays de partidas do simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon")

## Funcionalidades
Atualmente, a API consegue retornar informações corretas dos seguintes formatos:
* gen7ou
* gen7ubers
* gen7uu
* gen7ru
* gen7nu
* gen7pu
* gen7lc
* gen7anythinggoes
* gen7zu
* gen7cap
* gen7customgame
* gen7doublesou
* gen7doublesubers
* gen7doublesuu
* gen7natureswap
* gen7battlespotdoubles
* gen7followtheleader
* gen7balancedhackmons
* gen7mixandmega
* gen7almostanyability
* gen7battlefactory
* gen6battlefactory

Outros formatos testados mas ainda não funcionais
* **gen7randombattle ->** Indefinição da equipe
* **gen7unratedrandombattle ->** Indefinição da equipe
* **gen71v1 ->** Score incorreto
* **gen7battlesplotsingles ->** Score incorreto
* **gen7randomdoublesbattle ->** Score incorreto
* **gen7vgc2019ultraseries ->** Score incorreto
* **gen7letsgorandombattle ->** Indefinição da equipe
* **gen7monotyperandombattle ->** Indefinição da equipe
* **gen7superstaffbrosbrawl ->** Indefinição da equipe
* **gen7challengecup1v1 ->** Score incorreto
* **gen7doubleshackmonscup ->** Score incorreto
* **gen6randombattle ->** Indefinição da equipe
* **gen7doubleshackmonscup ->** Indefinição da equipe
* **gen7hackmonscup ->** Indefinição da equipe
* **gen5randombattle ->** Indefinição da equipe
* **gen7metronomebattle ->** Indefinição da equipe e score incorreto
* **gen4randombattle ->** Indefinição da equipe

Formatos não testados   
* gen7lcuu
* gen7caplc
* gen7battlesplotspecial16
* gen7vgc2019sunseries
* gen7vgc2019moonseries
* gen7vgc2017
* gen7vgc2018
* gen72v2doubles
* gen7camomons
* gen7stabmons
* gen7tiershift
* gen7partnersincrime
* gen6gennextou
* gen7letsgoou
* gen7letsgosinglesnorestriction
* gen7letsgocustomgame
* gen7letsgodoublesou
* gen7letsgodoublesnorestriction
* gen7bssfactory
* gen7challengecup2v2

## Como funciona?
A API possui apenas uma rota: **/:replay**, em que é recebido o id da partida, por exemplo:
    
    gen7inheritance-695181554

e então retorna informações sobre o ocorrido naquela partida, como equipes, jogadores, motivo da vitória, etc.

## 0bservações e dicas:
* Utilize um front-end que receba o link e repasse apenas o id para a API, assim torna o trabalho de quem realiza
    o upload do replay mais facilitado.

* Alguns formatos ainda não foram testados pela grande quantidade. Pretendo criar uma ferramenta de automação de testes mesmo que rústica para facilitar uma documentação de testes.

* O simulador [Pokémon Showdown](https://play.pokemonshowdown.com/ "Um simulador de partidas competitivas Pokémon") possui um repositório no Github: [Repositório do Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown "Repositório do Pokémon Showdown")

## Expectativas para versões futuras:
* Criação de funcionalidades para automação de teste
* Adaptação de formatos ainda não funcionais na API
* Retorno de informações mais complexas
* Outras rotas com "pacotes" de informações, facilitando a escolha de que informação enviar/analisar
