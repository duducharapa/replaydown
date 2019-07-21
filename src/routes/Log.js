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

app.get('/log/:replay',(req,res) => {
  
  let replay = req.params.replay;
  const url = utilities.constructUrl(replay,'log');

  rp(url)
    
    /*  SIMPLESMENTE TRANSFORMA EM JSON E PARTE A STRING PARA MELHOR VISUALIZAÇÃO */
    .then(html => res.send(JSON.stringify(html).split('\\n')) )
    
    .catch( err => res.status(501).send('An error as occured: ' + err ) );
});

export default app;