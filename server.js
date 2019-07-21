/*  IMPORTS DE PACOTES TERCEIROS  */
import Express from 'express';

/*  ROTAS   */
import Winner from './src/routes/Winner';
import Log from './src/routes/Log';
import All from './src/routes/All';
import Teams from './src/routes/Teams';
import Players from './src/routes/Players';
import Format from './src/routes/Format';
import WinMode from './src/routes/WinMode';
import Scores from './src/routes/Scores';

import Teste from './src/routes/Teste';

/*  CONSTANTES    */
const app = Express();

/*  ROTA QUE RETORNA TODAS AS INFORMAÇÕES DA BATALHA */
app.get('/all/:replay',All);

/*  ROTA QUE RETORNA O LOG DE UM REPLAY    */
app.get('/log/:replay',Log);

/*  ROTA QUE RETORNA O VENCEDOR DA BATALHA    */
app.get('/winner/:replay',Winner);

/*  ROTA QUE RETORNA AS EQUIPES DOS JOGADORES  */
app.get('/teams/:replay',Teams);

/*  ROTA QUE RETORNA O NOME DOS JOGADORES  */
app.get('/players/:replay',Players);

/*  ROTA QUE RETORNA O FORMATO DA PARTIDA  */
app.get('/format/:replay',Format);

/*  ROTA QUE RETORNA O MODO DE VITÓRIA DA PARTIDA  */
app.get('/winmode/:replay',WinMode);

/*  ROTA QUE RETORNA SCORES DOS JOGADORES  */
app.get('/scores/:replay',Scores);

app.get('/teste/:replay',Teste);

app.use( (req,res) => res.status(404).send('Route not found') );

app.listen(80, () => console.log('App iniciado na porta 3000') );