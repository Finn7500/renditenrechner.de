<template>
  <div class="career_header">
    <h1 class="career_page_title">{{ t("career") }}</h1>
    <p class="career_title">{{ t("career_title") }}</p>
  </div>
  <main class="career_page">

    <div class="career_quote">
      <div class="career_quote_img">
        <img :src="career_de">
      </div>
      <div class="career_quote_text">
        <p>
          {{ t("career_intro") }}
        </p>
      </div>
    </div>

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
// import { inject } from "vue"
// import { useText } from "@/composables/useText"

// const lang = inject("lang")
// const { t } = useText(lang)

import career_en from "@/assets/images/career_en.png";
import career_de from "@/assets/images/career_de.png";
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/main.scss' as *;

.career_quote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-lg;

  &_text {
    padding: $spacing-container-xl;
    font-size: $font-size-xxl;
  }

  &_img {
    border-radius: $border-radius-lg; //runde ecken
    width: 700px;
    height: auto;
    box-shadow: $shadow-md;
    transition: transform 0.3s ease;
    display: flex;
    overflow: hidden;



    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}


.career_page {
  max-width: 900px;
  margin: 100px auto;
  padding: 0 20px 60px;
}

.career_page_title {
  font-size: 58px;
  margin-bottom: 8px;
}

.career_header {
  margin-bottom: 40px;
}

.career_title {
  font-size: 24px;
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
