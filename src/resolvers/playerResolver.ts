import Player from "../models/Player";

interface GamePlayers {
  p1: Player
  p2: Player
}

const PLAYER_REGEXP = new RegExp(/^\|player\|p(1|2)\|(.*)\|(.*)$/);
const playerResolver = (data: string[]) => {
  const cleanData = data.map((line: string) => {
    if (PLAYER_REGEXP.test(line)) {
      const matched = line.match(PLAYER_REGEXP);
      return new Player(matched[2]);
    }

    return undefined;
  }).filter((value) => value);
  
  const players: GamePlayers = {
    p1: cleanData[0],
    p2: cleanData[1]
  };

  return players;
}

export default playerResolver;