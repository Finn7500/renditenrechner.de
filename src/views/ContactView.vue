<template>
  <main class="page">
    <h1>Contact</h1>
    <p class="intro">
      If you have any questions regarding the return calculator or collaboration opportunities,
      feel free to reach out.
    </p>

    <section class="contact-box">
      <p><strong>Email:</strong> contact@yourdomain.com</p>
      <p><strong>Location:</strong> Germany</p>
    </section>

    <section>
      <form>
        <title>Name</title>
        <input type="text"/>
        <button type="submit">{{ t("submit") }}</button>
      </form>
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
  margin-bottom: 20px;
}

.intro {
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0.8;
}

.contact-box {
  padding: 30px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
}
</style>
