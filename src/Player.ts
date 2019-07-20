class Player {

  private _score: number;
  private _team: string[];
  private _name: string;

  
  public constructor(name:string) {
    this._name = name;
    this._score = 0;
    this._team = [];
  }
  

  /*  GETTERS  */
  public get score():number { 
    return this._score;
  }

  
  public get team():string[] {
    return this._team;
  }
  

  public get name():string {
    return this._name;
  }


  public set score(score:number) {
    this._score = score
  }
  

  /*  MÉTODOS  */
  public includePoke(pokemon:string) {
    this._team.push(pokemon);
  }

  
  public incrementScore() {
    this._score++;
  }
  

  public decrementScore() {
    this._score--;
  }


}

export default Player;