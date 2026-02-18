<template>
  <main class="page">
    <h1>{{ t("privacy_policy") }}</h1>

    <section>
      <h2>1. {{ t("privacy_policy_info") }}</h2>
      <p>
        {{ t("privacy_policy_info_text") }}
      </p>
    </section>

    <section>
      <h2>2. {{ t("privacy_policy_collection") }}</h2>
      <p>
        {{ t("privacy_policy_collection_text") }}
      </p>
    </section>

    <section>
      <h2>3. {{ t("contact") }}</h2>
      <p>
        {{ t("privacy_policy_contact_text") }}
      </p>
    </section>
  </main>
</template>

<script setup>

</script>

<style scoped>
@import "@/assets/styles/main.scss";

.page {
  max-width: 900px;
  margin: 120px auto;
  padding: 0 20px;
}

h1 {
  font-size: 42px;
  margin-bottom: 40px;
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
