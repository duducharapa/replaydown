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

app.get('/all/:replay',(req,res) => {
  let replay = req.params.replay;
  const url = utilities.constructUrl(replay,'json');

  rp(url)
    .then(html => JSON.parse(html) )
    .then(json => {
      let logs = json.log.split('\n');
      let game = new Game(logs,json.format);
      let p1 = new Player(json.p1), p2 = new Player(json.p2);

      /*
          CÓDIGO PARA PEGAR O ÚLTIMO TURNO

      for(let i = logs.length; i > 0; i--){
          const exp_turn = /\|turn\|/;
          if(exp_turn.test(logs[i])){
              console.log(logs[i]);
              break;
          }
      }*/

      game.setTeams(p1,p2);
      game.setScores(p1,p2);
      game.setWinMode(p1,p2);

      return game.exportInfo(p1,p2);
  })
    .then(json => res.send(json) )
    .catch( err => console.log("Erro: " + err ) );

});

export default app;