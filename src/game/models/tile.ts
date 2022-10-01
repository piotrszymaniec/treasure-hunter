import Signal from '../../common/signal';

const Items = [
  { type:'🍃', points: 0},
  { type:'💰', points: 10},
  { type:'🎁', points: 30},
  { type:'💎', points: 50},
]

interface IItem {
  type: string;
  points: number;
}

export default class Tile {
  content: string
  item: IItem
  visited: boolean
  onVisit: Signal<void> = new Signal()

  constructor() {
    this.content  = "🌲"
    this.visited = false
    this.item = this.generateItem(Items)
  }

  getPoints():number {
    return this.item.points
  }
  getAppearance():string {
    return this.item.type
  }

  generateItem(itemsList:Array<IItem>):IItem {
    const item =  itemsList[Math.floor(Math.random()*itemsList.length)]
    return item
  }

  visit() {
    if (this.visited === false) {
      this.visited = true
      this.content = this.item.type
      this.onVisit.emit()
    }
  }
}
