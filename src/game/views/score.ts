import Control from "../../common/controls"
import GameModel from "../models/game"
import { TGatheredItems } from '../models/game';

import "./score.css"

export default class ScoreView extends Control {
  itemsDisplay: Control
  score: Control
  constructor(parentNode: HTMLElement, gamemodel: GameModel) {
    super(parentNode,'div','scores')
    this.score = new Control(this.node,'div','score')
    this.itemsDisplay = new Control(this.node, 'div', 'item-display')
    gamemodel.onScoreChange.add(() => this.updatePoints(gamemodel.score))
    gamemodel.onGatheredItem.add((items) => this.updateItems(items))
  }

  updateItems(items: TGatheredItems) {
    this.itemsDisplay.node.innerHTML = ""
    items.forEach( (quantity, item) => {
      this.itemsDisplay.node.innerHTML += `<div>${item.type} ${quantity} x ${item.points}</div>`
    })
  }

  updatePoints(points:number) {
    this.score.node.innerText = 'Points: ' + points.toString()
  }
}