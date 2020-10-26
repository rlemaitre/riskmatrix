<template>
  <div class="container">
    <b-notification type="is-info is-light" :closable="false">{{risk.mitigation}}</b-notification>
  </div>
</template>

<script>
import Risk from '@/domain/Risk'

export default {
  name: 'RiskMitigation',
  props: {
    risk: Risk
  }
}
</script>

<style scoped>

</style>