<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full">
        <div class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Risk Matrix</h1>
              <h2 class="subtitle">Determine the level of risk associated with a particular situation.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <b-steps :rounded="false" v-model="activeStep">
        <b-step-item icon-pack="fas" icon="circle-notch">
          <div class="detail-container">
            <h1 class="subtitle">How likely is your situation?</h1>
            <section class="section has-text-left">
              <div class="field" v-for="level in likelinessLevels" :key="level.index">
                <b-radio v-model="likelihood" :native-value="level.index">{{ level.description }}
                </b-radio>
              </div>
            </section>
          </div>
        </b-step-item>
        <b-step-item icon-pack="fas" icon="sliders-h">
          <div class="detail-container">
            <h1 class="subtitle">On which criteria do you want to rate the consequences of the situation?</h1>
            <section class="section has-text-left">
              <div class="field" v-for="subject in subjects" :key="subject.name">
                <b-checkbox v-model="subject.used" :true-value="true" :false-value="false">
                  {{ subject.name }}
                </b-checkbox>
              </div>
            </section>
          </div>
        </b-step-item>
        <b-step-item v-for="subject in usedSubjects" :key="subject.name" icon-pack="fas" :icon="subject.icon">
          <div class="detail-container">
            <h1 class="subtitle">{{ subject.question }}</h1>
            <section class="section has-text-left">
              <div class="field" v-for="level in consequenceLevels" :key="level.index">
                <b-radio v-model="subject.selectedLevel" :native-value="level.index">
                  {{ subject.levels[level.index] }}
                </b-radio>
              </div>
            </section>
          </div>
        </b-step-item>
        <b-step-item icon-pack="fas" icon="flag-checkered">
          <div class="detail-container">
            <b-tabs v-model="activeTab" position="is-centered" type="is-toggle" expanded>
              <b-tab-item headerClass="has-text-primary" label="Overall">
                <div class="columns">
                  <div class="column is-full">
                    <RiskSummary v-if="overallRisk()" :risk="overallRisk()" :overall="true"></RiskSummary>
                  </div>
                </div>
                <div class="columns">
                  <article class="column is-full message" v-if="overallRisk()">
                    <div class="message-body">
                      {{ overallRisk().mitigation }}
                    </div>
                  </article>
                </div>
                <div class="columns is-centered">
                  <div class="column is-half">
                    <RiskMatrix :consequence="consequenceLevels[overallConsequence()]"
                                :likelihood="likelinessLevels[likelihood]"></RiskMatrix>
                  </div>
                </div>
              </b-tab-item>
              <b-tab-item v-for="subject in usedSubjects" :key="subject.name" icon-pack="fas" :icon="subject.icon"
                          :label="subject.name">
                <div class="columns">
                  <div class="column is-full">
                    <RiskSummary :risk="risk(subject)" :subject="subject.name"></RiskSummary>
                  </div>
                </div>
                <div class="columns is-centered">
                  <div class="column is-half">
                  <RiskMatrix :consequence="consequenceLevels[subject.selectedLevel]"
                              :likelihood="likelinessLevels[likelihood]"></RiskMatrix>
                </div>
                </div>
              </b-tab-item>
            </b-tabs>
          </div>
        </b-step-item>
      </b-steps>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RiskMatrix from '@/components/RiskMatrix'
import RiskSummary from '@/components/RiskSummary'
import Likeliness from '@/domain/Likeliness'
import Consequences from '@/domain/Consequences'
import Subjects from '@/domain/Subject'
import Risk from '@/domain/Risk'
// import RiskMitigation from '@/components/RiskMitigation'

export default {
  name: 'Home',
  data: () => {
    return {
      likelihood: undefined,
      activeTab: 0,
      activeStep: 0,
      subjects: [Subjects.performance, Subjects.safety, Subjects.asset, Subjects.schedule, Subjects.cost]
    }
  },
  computed: {
    usedSubjects: function () {
      return this.subjects.filter(subject => subject.used)
    },
    likelinessLevels: function () {
      return Likeliness.all
    },
    consequenceLevels: function () {
      return Consequences.all
    },
  },
  methods: {
    overallConsequence: function () {
      let levels = this.usedSubjects.map(subject => subject.selectedLevel)
      return Math.max(...levels)
    },
    overallRisk: function () {
      return Risk.getLevel(this.likelinessLevels[this.likelihood], this.consequenceLevels[this.overallConsequence()])
    },
    risk: function (subject) {
      return Risk.getLevel(this.likelinessLevels[this.likelihood], this.consequenceLevels[subject.selectedLevel])
    }
  },
  components: {
    // RiskMitigation,
    RiskMatrix,
    RiskSummary
  }
}
</script>
