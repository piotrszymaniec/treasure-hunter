import GameModel from './game/models/game';
import BoardView from './game/views/board';
import ScoreView from './game/views/score';
import ISettings from './game/ISettings';
import Control from './common/controls';


export default class Game extends Control{
  model: GameModel
  boardView: BoardView
  scoreView: ScoreView
  message: Control
  constructor(parentNode:HTMLElement, settings: ISettings = {widthSize:10, heightSize: 10}) {
    super(parentNode,'div','game')
    this.model = new GameModel(settings)
    this.message = new Control(parentNode, 'h1', 'game-message','Welcome to the Woods of Malice!')
    this.boardView = new BoardView(parentNode, this.model)
    this.scoreView = new ScoreView(parentNode, this.model)
  }
}