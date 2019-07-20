class Utilities {

  private static readonly BASE_URL:string = 'https://replay.pokemonshowdown.com/';

  public constructUrl(replayid:string,outformat:string):string {
    return Utilities.BASE_URL + replayid + '.' + outformat;
  }

}

export default Utilities;