import Consequences from './Consequences'
import Likeliness from './Likeliness'
class Level {
  label;
  className;
  index;
  mitigation;
  constructor (props) {
    this.label = props.label;
    this.className = props.className;
    this.index = props.index;
    this.mitigation = props.mitigation;
  }
}

const levels = {
  lowest: new Level({
    label: 'Lowest',
    className: 'lowest-risk',
    index: 0,
    mitigation: 'Put the risks on a watch list and re-assess them regularly. “There is no specific requirement to generate a mitigation plan. The only requirement is to identify and track the risk drivers to ensure the risk remains tolerable,” says NASA.'
  }),
  low:  new Level({
    label: 'Low',
    className: 'low-risk',
    index: 1,
    mitigation: 'Perform extra research to better understand the risk. Write a risk mitigation plan which captures the actions to be taken to reduce the likelihood of the risk happening. Share it with your team so everyone is aware of the plan should the risk happen.'
  }),
  medium:  new Level({
    label: 'Medium',
    className: 'medium-risk',
    index: 2,
    mitigation: 'Write a risk mitigation plan which captures the actions to be taken to reduce the likelihood of the risk happening. Share it with your team so everyone is aware of the plan should the risk happen.\nIn addition to this, perform continuous risk assessments, and assign adequate resources.'
  }),
  high:  new Level({
    label: 'High',
    className: 'high-risk',
    index: 3,
    mitigation: 'This risk situation needs to be escalated internally. Don\'t keep these just to yourself or your immediate team. Let all relevant stakeholders know about the risk.'
  }),
  highest:  new Level({
    label: 'Highest',
    className: 'highest-risk',
    index: 4,
    mitigation: 'At this level of risk, you and your team may consider considerably changing the original plan. This decision may involve significant costs—in terms of schedule, performance, budget—that may be extremely difficult or even impossible to avoid. Knowing that you are dealing with the highest risk level will help in making hard but necessary choices.'
  }),
};

const matrix = new Map();
const columnForLowest = new Map();
columnForLowest.set(Likeliness.notLikely, levels.lowest);
columnForLowest.set(Likeliness.notVeryLikely, levels.lowest);
columnForLowest.set(Likeliness.likely, levels.lowest);
columnForLowest.set(Likeliness.highlyLikely, levels.lowest);
columnForLowest.set(Likeliness.nearCertainty, levels.lowest);
matrix.set(Consequences.lowest, columnForLowest);
const columnForLow = new Map();
columnForLow.set(Likeliness.notLikely, levels.lowest);
columnForLow.set(Likeliness.notVeryLikely, levels.low);
columnForLow.set(Likeliness.likely, levels.low);
columnForLow.set(Likeliness.highlyLikely, levels.medium);
columnForLow.set(Likeliness.nearCertainty, levels.high);
matrix.set(Consequences.low, columnForLow);
const columnForMedium = new Map();
columnForMedium.set(Likeliness.notLikely, levels.low);
columnForMedium.set(Likeliness.notVeryLikely, levels.medium);
columnForMedium.set(Likeliness.likely, levels.medium);
columnForMedium.set(Likeliness.highlyLikely, levels.high);
columnForMedium.set(Likeliness.nearCertainty, levels.highest);
matrix.set(Consequences.medium, columnForMedium);
const columnForHigh = new Map();
columnForHigh.set(Likeliness.notLikely, levels.low);
columnForHigh.set(Likeliness.notVeryLikely, levels.medium);
columnForHigh.set(Likeliness.likely, levels.high);
columnForHigh.set(Likeliness.highlyLikely, levels.highest);
columnForHigh.set(Likeliness.nearCertainty, levels.highest);
matrix.set(Consequences.high, columnForHigh);
const columnForHighest = new Map();
columnForHighest.set(Likeliness.notLikely, levels.medium);
columnForHighest.set(Likeliness.notVeryLikely, levels.high);
columnForHighest.set(Likeliness.likely, levels.highest);
columnForHighest.set(Likeliness.highlyLikely, levels.highest);
columnForHighest.set(Likeliness.nearCertainty, levels.highest);
matrix.set(Consequences.highest, columnForHighest);

function getLevel(likeliness, consequence) {
  if (matrix.has(consequence)) {
    const column = matrix.get(consequence);
    if (column.has(likeliness)) {
      return column.get(likeliness);
    }
  }
  return null;
}
export default {
  levels: Object.freeze(levels),
  getLevel: getLevel
};