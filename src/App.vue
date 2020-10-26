<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column is-full">
        <div class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Risk Matrix</h1>
              <h2 class="subtitle">The <a
                  href="https://www.nasa.gov/sites/default/files/atoms/files/s3001_guidelines_for_risk_management_-_ver_g_-_10-25-2017.pdf">NASA
                way</a
              > to determine the level of risk associated with a particular situation.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <footer class="footer columns">
      <div class="column is-four-fifths">
        <div class="has-text-centered">
          <strong>RiskMatrix</strong> by <a href="https://rlemaitre.com/"> Rapha&euml;l Lemaitre</a>.
          The source code is licensed <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
        </div>
        <div class="has-text-centered">
          Inspired by <a href="https://nesslabs.com/nasa-risk-matrix">Managing risk with the NASA Risk Matrix</a>
          article,
          published on <a href="https://nesslabs.com">Ness Labs</a> by
          <a href="https://nesslabs.com/author/annelaure">Anne-Laure Le Cunff</a>.
        </div>
      </div>
      <div class="column">
        <a href="https://gitlab.com/rlemaitre/riskmatrix" class="button is-medium is-gitlab">
          <b-icon pack="fab" icon="gitlab"></b-icon>
          <span>Gitlab</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "styles/variables";

#app {
  text-align: center;
}
</style>
