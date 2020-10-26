<template>
  <div class="container">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect height="22" width="22" class="result" :x="21 + 21 * this.$props.consequence.index" :y="84 -(21 * this.$props.likelihood.index)"></rect>
      <g>
        <rect height="20" width="20" class="lowest-risk" x="22" y="1">
        </rect>
        <svg width="20" height="20" x="22" y="1">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="high-risk" x="43" y="1"></rect>
        <svg width="20" height="20" x="43" y="1">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGH
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="64" y="1"></rect>
        <svg width="20" height="20" x="64" y="1">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="85" y="1"></rect>
        <svg width="20" height="20" x="85" y="1">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="106" y="1"></rect>
        <svg width="20" height="20" x="106" y="1">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>

      <g>
        <rect height="20" width="20"  class="lowest-risk" x="22" y="22"></rect>
        <svg width="20" height="20" x="22" y="22">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="medium-risk" x="43" y="22"></rect>
        <svg width="20" height="20" x="43" y="22">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">MEDIUM
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="high-risk" x="64" y="22"></rect>
        <svg width="20" height="20" x="64" y="22">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGH
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="85" y="22"></rect>
        <svg width="20" height="20" x="85" y="22">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="106" y="22"></rect>
        <svg width="20" height="20" x="106" y="22">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>

      <g>
        <rect height="20" width="20"  class="lowest-risk" x="22" y="43"></rect>
        <svg width="20" height="20" x="22" y="43">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="low-risk" x="43" y="43"></rect>
        <svg width="20" height="20" x="43" y="43">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOW
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="medium-risk" x="64" y="43"></rect>
        <svg width="20" height="20" x="64" y="43">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">MEDIUM
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="high-risk" x="85" y="43"></rect>
        <svg width="20" height="20" x="85" y="43">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGH
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20" class="highest-risk" x="106" y="43"></rect>
        <svg width="20" height="20" x="106" y="43">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGHEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="highest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>

      <g>
        <rect height="20" width="20"  class="lowest-risk" x="22" y="64"></rect>
        <svg width="20" height="20" x="22" y="64">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="low-risk" x="43" y="64"></rect>
        <svg width="20" height="20" x="43" y="64">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOW
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="medium-risk" x="64" y="64"></rect>
        <svg width="20" height="20" x="64" y="64">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">MEDIUM
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="medium-risk" x="85" y="64"></rect>
        <svg width="20" height="20" x="85" y="64">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">MEDIUM
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="high-risk" x="106" y="64"></rect>
        <svg width="20" height="20" x="106" y="64">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">HIGH
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="high-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>

      <g>
        <rect height="20" width="20"  class="lowest-risk" x="22" y="85"></rect>
        <svg width="20" height="20" x="22" y="85">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="lowest-risk" x="43" y="85"></rect>
        <svg width="20" height="20" x="43" y="85">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOWEST
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="lowest-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="low-risk" x="64" y="85"></rect>
        <svg width="20" height="20" x="64" y="85">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOW
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="low-risk" x="85" y="85"></rect>
        <svg width="20" height="20" x="85" y="85">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">LOW
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="low-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>
      <g>
        <rect height="20" width="20"  class="medium-risk" x="106" y="85"></rect>
        <svg width="20" height="20" x="106" y="85">
          <text font-size="20%" font-weight="bold" x="50%" y="33%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">MEDIUM
          </text>
          <text font-size="20%" font-weight="bold" x="50%" y="66%" class="medium-risk-text" alignment-baseline="middle"
                text-anchor="middle">RISK
          </text>
        </svg>
      </g>

      <svg width="104" height="20" x="22" y="106">
        <text font-size="40%" font-weight="bold" x="50%" y="50%" fill="#000000" alignment-baseline="middle"
              text-anchor="middle">CONSEQUENCE →
        </text>
      </svg>
      <svg width="20" height="104" x="1" y="1">
        <text font-size="40%" font-weight="bold" x="50%" y="50%" fill="#000000" alignment-baseline="middle"
              text-anchor="middle" writing-mode="tb-rl" transform="rotate(-180 11 53)">LIKELINESS →
        </text>
      </svg>
    </svg>
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
    return {}
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
.lowest-risk {
  fill: $lowest-risk-color;
}
.lowest-risk-text {
  fill: $lowest-risk-color-invert;
}

.low-risk {
  fill: $low-risk-color;
}
.low-risk-text {
  fill: $low-risk-color-invert;
}

.medium-risk {
  fill: $medium-risk-color;
}
.medium-risk-text {
  fill: $medium-risk-color-invert;
}

.high-risk {
  fill: $high-risk-color;
}
.high-risk-text {
  fill: $high-risk-color-invert;
}

.highest-risk {
  fill: $highest-risk-color;
  color: $highest-risk-color-invert;
}
.highest-risk-text {
  fill: $highest-risk-color-invert;
}

.result {
  fill: $primary;
}
</style>