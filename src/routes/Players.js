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

app.get('/players/:replay',(req,res) => {
  
  let replay = req.params.replay;
  const url = utilities.constructUrl(replay,'json');

  rp(url)
    .then(html => JSON.parse(html) )
    
    .then(json => {
      
      res.json({
        p1: json.p1,
        p2: json.p2
      });

    })
    
    .catch( err => res.status(501).send('An error as occured: ' + err ) );
});

export default app;