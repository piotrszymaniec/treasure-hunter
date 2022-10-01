import Signal from '../../common/signal';
import ISettings from '../ISettings';
import Tile from './tile';

export default class GameModel {
  gameboard: Tile[][]
  settings: ISettings
  score: number = 0
  onScoreChange: Signal<void> = new Signal<void>()

  constructor(settings:ISettings) {
    this.settings = settings
    this.createBoard()
  }

  getGameboardTiles() {
    return this.gameboard
  }

  getGameboardTile(x:number,y:number):Tile {
    return this.gameboard[x][y]
  }

  private createBoard() {
    this.gameboard = [];
    for(let i: number = 0; i < this.settings.widthSize; i++) {
      this.gameboard[i] = [];
      for(let j: number = 0; j< this.settings.heightSize; j++) {
        let tile = new Tile();
        tile.onVisit.add(() => this.updateScore(tile.getPoints()))
        this.gameboard[i][j] = tile
      }
    }
  }

  updateScore(points: number) {
    this.score += points
    this.onScoreChange.emit()
    console.log(this.score)
  }
}