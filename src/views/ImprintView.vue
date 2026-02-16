<template>
  <main class="legal">
    <h1 class="headline"></h1>
    <p class="lead"></p>

    <section>
      <h2></h2>
      <p class="text"></p>
    </section>

    <p class="stand"></p>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.legal {
  max-width: 900px;
  margin: 120px auto;
  padding: 0 20px;
}

.headline {
  font-size: clamp(48px, 6vw, 80px);
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}

.lead {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 50px auto;
  font-size: 20px;
  line-height: 1.6;
  opacity: 0.85;
}

.box {
  margin: 26px 0;
  padding: 22px 22px;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);

  h2 {
    font-size: 26px;
    margin: 0 0 12px 0;
  }
}

.text {
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  white-space: pre-line; // WICHTIG: \n aus JSON wird zu Zeilenumbrüchen
}

.stand {
  text-align: center;
  margin-top: 40px;
  opacity: 0.7;
  font-size: 14px;
}
</style>
