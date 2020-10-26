import Consequences from '@/domain/Consequences'

export class Subject {
  constructor (props) {
    this.name = props.name
    this.icon = props.icon
    this.question = props.question
    this.levels = props.levels
    this.used = props.used
    this.selectedLevel = props.selectedLevel
  }

}

const performance = new Subject({
  name: 'System performance',
  icon: 'rocket',
  question: 'What would be the impact on the system performance?',
  levels: [
    'Minimal impact on goals',
    'Minor impact on goals',
    'Unable to achieve a particular goal',
    'Unable to achieve multiple goals',
    'Unable to achieve the overall goal'
  ],
  used: true,
  selectedLevel: Consequences.lowest.index
})
const safety = new Subject({
  name: 'Human safety',
  icon: 'user-shield',
  question: 'What would be the impact on human safety?',
  levels: [
    'Discomfort or nuisance',
    'First aid',
    'Minor injury or illness',
    'Major injury or illness',
    'Loss of life',
  ],
  used: true,
  selectedLevel: Consequences.lowest.index
})
const asset = new Subject({
  name: 'Asset integrity',
  icon: 'wrench',
  question: 'What would be the impact on asset integrity?',
  levels: [
    'No physical damage',
    'Cosmetic damage',
    'Functional damage but repairable',
    'Substantial damage but repairable',
    'Destroyed',
  ],
  used: true,
  selectedLevel: Consequences.lowest.index
})
const schedule = new Subject({
  name: 'Project schedule',
  icon: 'clock',
  question: 'What would be the impact on the project schedule?',
  levels: [
    'Minimal impact on schedule',
    'Delay on some tasks not impacting overall schedule',
    'Delay on some tasks minimally impacting overall schedule',
    'Major slip in overall schedule',
    'Critical milestones cannot be met',
  ],
  used: true,
  selectedLevel: Consequences.lowest.index
})
const cost = new Subject({
  name: 'Project cost',
  icon: 'dollar-sign',
  question: 'What would be the impact on the project cost?',
  levels: [
    'Minimal impact on cost',
    'Minor impact on cost (cost variance < 5%)',
    'Medium impact on cost (5%-10%)',
    'Major impact on cost (10%-15%)',
    'Critical impact on cost (cost variance > 15%)',
  ],
  used: true,
  selectedLevel: Consequences.lowest.index
})
const all = [
  performance,
  safety,
  asset,
  schedule,
  cost
]

export default { all, performance, safety, asset, schedule, cost }