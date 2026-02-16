<template>
  <main class="page">
    <h1>{{ t("career") }}</h1>

    <p class="intro">
      We are always interested in talented individuals who think analytically
      and strive for clarity in complex systems.
    </p>

    <section>
      <h2>Open Positions</h2>
      <p>
        Currently, there are no open positions.
        However, we welcome proactive applications.
      </p>
    </section>

    <section>
      <h2>Why Join?</h2>
      <p>
        Work at the intersection of finance and technology.
        Contribute to building tools that empower smarter decision-making.
      </p>
    </section>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page {
  max-width: 900px;
  margin: 120px auto;
  padding: 0 20px;
}

h1 {
  font-size: 42px;
  margin-bottom: 30px;
}

.intro {
  margin-bottom: 50px;
  line-height: 1.6;
  opacity: 0.85;
}

h2 {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 22px;
}

p {
  line-height: 1.6;
  opacity: 0.85;
}
</style>
