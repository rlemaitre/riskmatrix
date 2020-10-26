export class ConsequenceLevel {
  constructor (props) {
    this.index = props.index
    this.name = props.name
  }

  equals (level) {
    return this.index === level.index && this.name === level.name
  }
}

const lowest = new ConsequenceLevel({ index: 0, name: 'lowest' })
const low = new ConsequenceLevel({ index: 1, name: 'low' })
const medium = new ConsequenceLevel({ index: 2, name: 'medium' })
const high = new ConsequenceLevel({ index: 3, name: 'high' })
const highest = new ConsequenceLevel({ index: 4, name: 'highest' })
const all = [lowest, low, medium, high, highest]
const levels = {
  lowest, low, medium, high, highest, all
}

export default Object.freeze(levels)