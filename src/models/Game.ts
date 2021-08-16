import Player from "./Player";

class Game {
  private _p1: Player;
  private _p2: Player;
  
  public constructor(p1: Player, p2: Player) {
    this.p1 = p1;
    this.p2 = p2;
  }

  public get p1(): Player {
    return this._p1;
  }

  public get p2(): Player {
    return this._p2;
  }

  public set p1(value: Player) {
    this._p1 = value;
  }

  public set p2(value: Player) {
    this._p2 = value;
  }
}

export default Game;