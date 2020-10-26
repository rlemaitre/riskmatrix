export class LikelinessLevel {
  constructor (props) {
    this.index = props.index
    this.description = props.description
  }
  equals (level) {
    return this.index === level.index && this.description === level.description
  }
}

const notLikely = new LikelinessLevel({
  index: 0,
  description: 'Not likely (under 20% probability of happening)'
})
const notVeryLikely = new LikelinessLevel({
  index: 1,
  description: 'Not very likely (between 20% and 40% probability)'
})
const likely = new LikelinessLevel({
  index: 2, description: 'Likely (between 40% and 60%)'
})
const highlyLikely = new LikelinessLevel({
  index: 3,
  description: 'Highly likely (between 60% and 80%)'
})
const nearCertainty = new LikelinessLevel({
  index: 4,
  description: 'Near certainty (over 80% probability)'
})
const all = [notLikely, notVeryLikely, likely, highlyLikely, nearCertainty]
const levels = {
  notLikely,
  notVeryLikely,
  likely,
  highlyLikely,
  nearCertainty,
  all
}

export default Object.freeze(levels)