import Control from '../../common/controls';
import GameModel from '../models/game';
import Tile from '../models/tile';
import TileView from './tile';

import "./board.css"

export default class BoardView extends Control {
  gameModel:GameModel

  constructor(parentNode: HTMLElement,gameModel:GameModel) {
    super(parentNode,'div','board')
    this.gameModel = gameModel
    this.gameModel.getGameboardTiles().forEach( (tiles , rowIndex) => {
      let wrapperElement = new Control(this.node,'div', 'row')
      tiles.forEach( (tile: Tile, index:number) => new TileView(wrapperElement, tile))
    })
  }
}