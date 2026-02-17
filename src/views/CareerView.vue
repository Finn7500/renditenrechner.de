<template>
  <main class="career_page">
    <header class="career_header">
      <h1 class="career_page_title">{{ t("career") }}</h1>
      <p class="career_title">{{ t("career_title") }}</p>
    </header>

    <p class="career_intro">
      {{ t("career_intro") }}
    </p>

    <section class="career_card">
      <h2 class="career_section_title">
        {{ t("career_section_positions") }}
      </h2>
      <p class="career_text">
        {{ t("career_positions_text") }}
      </p>
    </section>

    <section class="career_card">
      <h2 class="career_section_title">
        {{ t("career_section_why") }}
      </h2>
      <p class="career_text">
        {{ t("career_why_text") }}
      </p>
    </section>
  </main>
</template>

<script setup>
import { inject } from "vue"
import { useText } from "@/composables/useText"

const lang = inject("lang")
const { t } = useText(lang)
</script>

<style lang="scss" scoped>
.career_page {
  max-width: 900px;
  margin: 100px auto;
  padding: 0 20px 60px;
}

.career_page_title {
  font-size: 36px;
  margin-bottom: 8px;
  text-align: center;
}

.career_header {
  text-align: center;
  margin-bottom: 40px;
}

.career_title {
  font-size: 16px;
  color: #666;
}

.career_intro {
  margin-bottom: 40px;
  line-height: 1.6;
  color: #444;
  text-align: center;
}

.career_card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.career_section_title {
  font-size: 20px;
  margin-bottom: 10px;
}

.career_text {
  line-height: 1.6;
  color: #333;
}
</style>
