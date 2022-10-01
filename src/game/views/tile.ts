
import Control from '../../common/controls';
import Tile from '../models/tile';

import "./tile.css"

export default class TileView extends Control {
  private tileModel: Tile

  constructor(parentNode: Control, tileModel: Tile) {
    super(parentNode.node,'div','tile', tileModel.content)
    this.tileModel = tileModel

    tileModel.onVisit.add(this.handleMouse)
    //todo decide on mouse events
    this.node.onmouseover = (e) => {
      tileModel.visit()
      this.removeMouseOver()
    }
    this.node.onclick = () => {
      console.log('moved mouse into object')
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