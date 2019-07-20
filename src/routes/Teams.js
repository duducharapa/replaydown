/*  IMPORTS DE PACOTES TERCEIROS  */
import Express from 'express';
import rp from 'request-promise';

/*  IMPORTS DAS CLASSES UTILIZADAS  */
import Player from '../../dist/Player';
import Game from '../../dist/Game';
import Utilities from '../../dist/Utilities';

/*  CONSTANTES  */
const utilities = new Utilities();
const app = Express.Router();

app.get('/teams/:replay',(req,res) => {
  
  let replay = req.params.replay;
  const url = utilities.constructUrl(replay,'json');

  rp(url)
    .then(html => JSON.parse(html) )
    
    .then(json => {
      let logs = json.log.split('\n');
      let game = new Game(logs,json.format);
      let p1 = new Player(json.p1), p2 = new Player(json.p2);
      
      /*  ANALIZA O REPLAY E JÁ GUARDA NOS JOGADORES OS POKÉMONS  */
      game.setTeams(p1,p2);

      res.send(game.export(p1,p2,['teams']));

    })
    
    .catch( err => res.status(501).send('An error as occured: ' + err ) );
});

export default app;