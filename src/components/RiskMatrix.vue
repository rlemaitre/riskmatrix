<template>
  <div class="grid-container">
    <div :class="{result: isSelected(4, 0)}" class="tile lowest-risk cell_5_1"></div>
    <div :class="{result: isSelected(4, 1)}" class="tile high-risk cell_5_2"></div>
    <div :class="{result: isSelected(4, 2)}" class="tile highest-risk cell_5_3"></div>
    <div :class="{result: isSelected(4, 3)}" class="tile highest-risk cell_5_4"></div>
    <div :class="{result: isSelected(4, 4)}" class="tile highest-risk cell_5_5"></div>

    <div class="likeliness_header">Likeliness →</div>
    <div class="consequence_header">Consequence →</div>

    <div :class="{result: isSelected(3, 0)}" class="tile lowest-risk cell_4_1"></div>
    <div :class="{result: isSelected(3, 1)}" class="tile medium-risk cell_4_2"></div>
    <div :class="{result: isSelected(3, 2)}" class="tile high-risk cell_4_3"></div>
    <div :class="{result: isSelected(3, 3)}" class="tile highest-risk cell_4_4"></div>
    <div :class="{result: isSelected(3, 4)}" class="tile highest-risk cell_4_5"></div>

    <div :class="{result: isSelected(2, 0)}" class="tile lowest-risk cell_3_1"></div>
    <div :class="{result: isSelected(2, 1)}" class="tile low-risk cell_3_2"></div>
    <div :class="{result: isSelected(2, 2)}" class="tile medium-risk cell_3_3"></div>
    <div :class="{result: isSelected(2, 3)}" class="tile high-risk cell_3_4"></div>
    <div :class="{result: isSelected(2, 4)}" class="tile highest-risk cell_3_5"></div>

    <div :class="{result: isSelected(1, 0)}" class="tile lowest-risk cell_2_1"></div>
    <div :class="{result: isSelected(1, 1)}" class="tile low-risk cell_2_2"></div>
    <div :class="{result: isSelected(1, 2)}" class="tile medium-risk cell_2_3"></div>
    <div :class="{result: isSelected(1, 3)}" class="tile medium-risk cell_2_4"></div>
    <div :class="{result: isSelected(1, 4)}" class="tile high-risk cell_2_5"></div>

    <div :class="{result: isSelected(0, 0)}" class="tile lowest-risk cell_1_1"></div>
    <div :class="{result: isSelected(0, 1)}" class="tile lowest-risk cell_1_2"></div>
    <div :class="{result: isSelected(0, 2)}" class="tile low-risk cell_1_3"></div>
    <div :class="{result: isSelected(0, 3)}" class="tile low-risk cell_1_4"></div>
    <div :class="{result: isSelected(0, 4)}" class="tile medium-risk cell_1_5"></div>
  </div>
</template>

<script>
import { LikelinessLevel } from '@/domain/Likeliness'
import { ConsequenceLevel } from '@/domain/Consequences'

export default {
  name: 'RiskMatrix',
  props: {
    consequence: ConsequenceLevel,
    likelihood: LikelinessLevel,
  },
  data () {
    return {
      tiles: [
        { id: 'cell_5_1', className: 'lowest-risk' },
        { id: 'cell_5_2', className: 'high-risk' },
        { id: 'cell_5_3', className: 'highest-risk' },
        { id: 'cell_5_4', className: 'highest-risk' },
        { id: 'cell_5_5', className: 'highest-risk' },
        { id: 'cell_5_5', className: 'highest-risk' },
        { id: 'cell_5_5', className: 'highest-risk' },
        { id: 'cell_4_1', className: 'lowest-risk' },
        { id: 'cell_4_2', className: 'medium-risk' },
        { id: 'cell_4_3', className: 'high-risk' },
        { id: 'cell_4_4', className: 'highest-risk' },
        { id: 'cell_4_5', className: 'highest-risk' },
        { id: 'cell_3_1', className: 'lowest-risk' },
        { id: 'cell_3_2', className: 'low-risk' },
        { id: 'cell_3_3', className: 'medium-risk' },
        { id: 'cell_3_4', className: 'high-risk' },
        { id: 'cell_3_5', className: 'highest-risk' },
        { id: 'cell_2_1', className: 'lowest-risk' },
        { id: 'cell_2_2', className: 'low-risk' },
        { id: 'cell_2_3', className: 'medium-risk' },
        { id: 'cell_2_4', className: 'medium-risk' },
        { id: 'cell_2_5', className: 'high-risk' },
        { id: 'cell_1_1', className: 'lowest-risk' },
        { id: 'cell_1_2', className: 'lowest-risk' },
        { id: 'cell_1_3', className: 'low-risk' },
        { id: 'cell_1_4', className: 'low-risk' },
        { id: 'cell_1_5', className: 'medium-risk' },
      ]
    }
  },
  methods: {
    isSelected: function (probability, outcome) {
      if (!this.$props.consequence || !this.$props.likelihood) {
        return false
      }
      return this.$props.consequence.index === outcome && this.$props.likelihood.index === probability
    }
  },
}

</script>

<style lang="scss" scoped>
.grid-container {
  width: 30rem;
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "likeliness_header cell_5_1 cell_5_2 cell_5_3 cell_5_4 cell_5_5"
    "likeliness_header cell_4_1 cell_4_2 cell_4_3 cell_4_4 cell_4_5"
    "likeliness_header cell_3_1 cell_3_2 cell_3_3 cell_3_4 cell_3_5"
    "likeliness_header cell_2_1 cell_2_2 cell_2_3 cell_2_4 cell_2_5"
    "likeliness_header cell_1_1 cell_1_2 cell_1_3 cell_1_4 cell_1_5"
    ". consequence_header consequence_header consequence_header consequence_header consequence_header";
}

.tile {
  width: 5rem;
  height: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;
  border-width: 3px;
  border-color: white;
  border-style: solid;
  color: white;
}

.cell_5_5 {
  grid-area: cell_5_5;
}

.cell_5_4 {
  grid-area: cell_5_4;
}

.cell_5_3 {
  grid-area: cell_5_3;
}

.cell_5_2 {
  grid-area: cell_5_2;
}

.cell_5_1 {
  grid-area: cell_5_1;
}

.likeliness_header {
  grid-area: likeliness_header;
  font-weight: bold;
  text-transform: uppercase;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
}

.consequence_header {
  grid-area: consequence_header;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto 0;
}

.cell_4_1 {
  grid-area: cell_4_1;
}

.cell_3_1 {
  grid-area: cell_3_1;
}

.cell_2_1 {
  grid-area: cell_2_1;
}

.cell_1_1 {
  grid-area: cell_1_1;
}

.cell_1_2 {
  grid-area: cell_1_2;
}

.cell_1_3 {
  grid-area: cell_1_3;
}

.cell_1_4 {
  grid-area: cell_1_4;
}

.cell_1_5 {
  grid-area: cell_1_5;
}

.cell_2_5 {
  grid-area: cell_2_5;
}

.cell_3_5 {
  grid-area: cell_3_5;
}

.cell_4_5 {
  grid-area: cell_4_5;
}

.cell_4_4 {
  grid-area: cell_4_4;
}

.cell_4_3 {
  grid-area: cell_4_3;
}

.cell_4_2 {
  grid-area: cell_4_2;
}

.cell_3_2 {
  grid-area: cell_3_2;
}

.cell_2_2 {
  grid-area: cell_2_2;
}

.cell_2_3 {
  grid-area: cell_2_3;
}

.cell_2_4 {
  grid-area: cell_2_4;
}

.cell_3_4 {
  grid-area: cell_3_4;
}

.cell_3_3 {
  grid-area: cell_3_3;
}

.lowest-risk {
  background-color: $lowest-risk-color;
  color: $lowest-risk-color-invert;

  &:before {
    content: "lowest risk";
  }
}

.low-risk {
  background-color: $low-risk-color;
  color: $low-risk-color-invert;

  &:before {
    content: "low risk";
  }
}

.medium-risk {
  background-color: $medium-risk-color;
  color: $medium-risk-color-invert;

  &:before {
    content: "medium risk"
  }
}

.high-risk {
  background-color: $high-risk-color;
  color: $high-risk-color-invert;

  &:before {
    content: "high risk";
  }
}

.highest-risk {
  background-color: $highest-risk-color;
  color: $highest-risk-color-invert;

  &:before {
    content: "highest risk";
  }
}

.result {
  color: $primary;
  border-color: $primary;
  border-width: 6px;
}
</style>