import Express from 'express';
import Player from './dist/Player';
import Game from './dist/Game';
import rp from 'request-promise';

const app = Express();

app.get('/:replay',(req,res) => {
    // Construção da string real do replay
    const url = 'https://replay.pokemonshowdown.com/' + req.params.replay + '.json';

    rp(url)
     .then(html => JSON.parse(html) )
     .then(json => {

        let game = new Game(json.log.split('\n'),json.format);
        let p1 = new Player(json.p1), p2 = new Player(json.p2);

        game.setTeams(p1,p2);
        game.setScores(p1,p2);
        game.setWinMode(p1,p2);

        // Retorna JSON com as informações relevantes
        return game.exportInfo(p1,p2);
    })
     .then(json => res.send(json) )
     .catch( err => console.log("Erro: " + err ) );
});

app.use( (req,res) => res.status(404).send('Route not found') );

app.listen(3000, () => console.log('App iniciado na porta 3000') );