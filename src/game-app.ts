import GameModel from './game/models/game';
import BoardView from './game/views/board';
import ScoreView from './game/views/score';
import ISettings from './game/ISettings';


export default class Game {
  model: GameModel
  boardView: BoardView
  scoreView: ScoreView
  constructor(parentNode:HTMLElement, settings: ISettings = {widthSize:10, heightSize: 10}) {
    this.model = new GameModel(settings)
    this.boardView = new BoardView(parentNode, this.model)
    this.scoreView = new ScoreView(parentNode, this.model)
  }
}