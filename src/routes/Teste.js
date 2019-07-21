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

app.get('/teste/:replay',(req,res) => {
  
  let replay = req.params.replay;
  const url = utilities.constructUrl(replay,'json');

  rp(url)
    .then(html => JSON.parse(html) )
    
    .then(json => {

      let p1team = [], p2team = [];
      
      let logs = json.log.split('\n');
      let game = new Game(logs,json.format);
      let p1 = new Player(json.p1), p2 = new Player(json.p2);
      
      /*  ANALIZA O REPLAY E JÁ CALCULA O SCORE DE CADA PLAYER  */
      logs.map(log => {
        const exp = /\|switch\||\|drag\|/;

        if(exp.test(log)){
          let splitval = log.split(/\||:/);
          if(splitval[2].indexOf('p1') !== -1){
            p1team.push(splitval[3]);
          }else{
            p2team.push(splitval[3]);
          }
        }
      });

      p1team = [...new Set(p1team)];
      p2team = [...new Set(p2team)];

      res.json({
        p1team: p1team,
        p2team: p2team
      });

    })
    
    .catch( err => res.status(501).send('An error as occured: ' + err ) );
});

export default app;