class Player {
  private _name: string;
  
  public constructor(name: string) {
    this.name = name;
  }
  
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public toJSON() {
    return {
      "name": this.name
    }
  }
}

export default Player;