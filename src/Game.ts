import Player from "./Player";

class Game {
  
  // Propriedades
  private _winner: string;
  private _winMode: string;
  private _logs: string[];
  private _format: string;
  private readonly EXP_REASON:RegExp = /^\|-message\|/;
  private readonly EXP_TEAM:RegExp = /^\|poke\|p.\|/;
  private readonly EXP_FAINT:RegExp = /^\|faint\|p.{2}/;

  // Construtor
  public constructor(logs: string[], format: string){
    this._winner = '';
    this._winMode = '';
    this._logs = logs;
    this._format = format;
  }

  // Getters
  public get winner():string{
    return this._winner;
  }

  public get winMode():string{
    return this._winMode;
  }
  
  public get format():string{
    return this._format;
  }
  
  public get logs():string[]{
    return this._logs;
  }

  // Setters
  public setWinMode(p1:Player, p2:Player){
    this._winMode = this.analyzeWinMode(p1,p2);
  }

  public analyzeWinMode(p1:Player,p2:Player):string{
    let returnval = '';
    
    this._logs.map(log => {
      if( this.EXP_REASON.test(log) ){
        if( log.indexOf('forfeit') !== -1 ){
          this._winner = log.indexOf(p1.name) !== -1 ? p2.name : p1.name;
          returnval = 'Forfeit';
        }else if( log.indexOf('inactivity') !== -1 ){
          this._winner = log.indexOf(p1.name) !== -1 ? p2.name : p1.name;
          returnval = 'Inactivity';
        }

        if( this._winner === p1.name )
          p2.score = 0;
        else
          p1.score = 0;
        
      }

      if( this._winner === '' ){
        this.setWinner(p1,p2);
        returnval = 'K.O';
      }

    });

    return returnval;
  }
  
  public setWinner(p1:Player,p2:Player){
    this._winner = p1.score > p2.score ? p1.name : p2.name;
  }

  // Métodos
  public setTeams(p1:Player, p2:Player){
    this._logs.map(log => {
      
      if( this.EXP_TEAM.test(log) ){
        let splitedlog = log.split('|');
        
        if( splitedlog[2] === 'p1' ){
          let poke = splitedlog[3].split(',');
          
          p1.includePoke(poke[0]);
          p1.incrementScore();
        }else{
          let poke = splitedlog[3].split(',');
          
          p2.includePoke(poke[0]);
          p2.incrementScore();
        }

      }

    });
  }

  public setScores(p1:Player, p2:Player){
    this._logs.map(log => {
      
      if( this.EXP_FAINT.test(log) ){
        let splitedlog = log.split(/\||:/);
        
        if( splitedlog[2].indexOf('p1') )
          p1.decrementScore();
        else
          p2.decrementScore();
        
      }

    });
  }

  public exportInfo(p1:Player, p2:Player):object{
    return {
      "p1": p1.name, "p1team": p1.team, "p1score": p1.score,
      "p2": p2.name, "p2team": p2.team, "p2score": p2.score,
      "tier": this.format, "winner": this.winner, "winmode": this.winMode
    }
  }

}

export default Game;