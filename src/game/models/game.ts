import Signal from '../../common/signal';
import ISettings from '../ISettings';
import Tile, { IItem } from './tile';
export type TGatheredItems = Map<IItem,number>

export default class GameModel {
  gameboard: Tile[][]
  settings: ISettings
  score: number = 0
  onScoreChange: Signal<void> = new Signal<void>()
  onGatheredItem: Signal<TGatheredItems> = new Signal<TGatheredItems>()
  gatheredItems: TGatheredItems

  constructor(settings:ISettings) {
    this.settings = settings
    this.gatheredItems = new Map<IItem, number>()
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
        tile.onVisit.add(() => this.updateGatheredItems(tile.item))
        this.gameboard[i][j] = tile
      }
    }
  }

  updateGatheredItems(item:IItem) {
    if (this.gatheredItems.has(item)) {
      const gathered = this.gatheredItems.get(item)
      this.gatheredItems.set(item, gathered + 1)
    } else {
     this.gatheredItems.set(item, 1)
    }
    this.onGatheredItem.emit(this.gatheredItems)
  }

  updateScore(points: number) {
    this.score += points
    this.onScoreChange.emit()
  }
}