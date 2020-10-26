<template>
  <div class="container">
    <h1 class="title">The {{ overall ? 'overall' : ''}} level of risk {{ subject ? `on ${subject}` : ''}} is: <span :class="risk.className">{{ risk.label }}</span></h1>
  </div>
</template>

<script>
import Risk from '@/domain/Risk'

export default {
  name: 'RiskSummary',
  props: {
    risk: Risk,
    overall: Boolean,
    subject: String
  }
}
</script>

<style lang="scss" scoped>
.lowest-risk {
  color: $lowest-risk-color;
  font-weight: bolder;
}

.low-risk {
  color: $low-risk-color;
  font-weight: bolder;
}

.medium-risk {
  color: $medium-risk-color;
  font-weight: bolder;
}

.high-risk {
  color: $high-risk-color;
  font-weight: bolder;
}

.highest-risk {
  color: $highest-risk-color;
  font-weight: bolder;
}
</style>