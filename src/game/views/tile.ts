
import Control from '../../common/controls';
import Tile from '../models/tile';

import "./tile.css"

export default class TileView extends Control {
  private tileModel: Tile

  constructor(parentNode: Control, tileModel: Tile) {
    super(parentNode.node,'div','tile', tileModel.content)
    this.tileModel = tileModel

    tileModel.onVisit.add(this.handleMouse)
    this.node.onmouseover = (e) => {
      tileModel.visit()
      this.removeMouseOver()
    }
  }

  removeMouseOver = () => {
    this.node.onmouseover = null
  }

  handleMouse = () => {
    this.update(this.tileModel.getAppearance())
  }

  update(item:string) {
    this.node.textContent = item
  }
}