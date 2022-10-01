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
  itemType: string
  points: number
  content: string
  item: IItem

  visited: boolean
  onVisit: Signal<void> = new Signal()

  constructor() {
    this.points = 0
    this.content  = "🌲"
    this.visited = false
    const {type, points} = this.generateItem(Items)
    this.item = this.generateItem(Items)
    this.itemType = type
    this.points = points
    console.log(this.generateItem(Items))
  }

  generateItem(itemsList:Array<IItem>):IItem {
    const item =  itemsList[Math.floor(Math.random()*itemsList.length)]
    return item
  }

  visit() {
    if (this.visited === false) {
      this.visited = true
      // this.content = this.itemType
      this.content = this.item.type
      this.onVisit.emit()
    }
  }
}
