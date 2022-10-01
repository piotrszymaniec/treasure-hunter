import Control from "../../common/controls"
import GameModel from "../models/game"

export default class ScoreView extends Control {
  constructor(parentNode: HTMLElement, gamemodel: GameModel) {
    super(parentNode,'div','scores','0')
    gamemodel.onScoreChange.add(() => {
      this.update(gamemodel.score)
    })
  }

  update(points:number) {
    this.node.textContent = points.toString()
  }
}