<template>
  <main class="about_page">
    <header class="about_header">
      <h1 class="about_page_title">{{ t("about") }}</h1>
      <p class="about_title">{{ t("about_title") }}</p>
    </header>

    <section class="about_card">
      <div class="about_card_head">
        <h2 class="about_section_title">{{ t("about_section_project") }}</h2>
        <p class="about_meta">{{ t("about_project_meta") }}</p>
      </div>
      <p class="about_text">{{ t("about_project_text") }}</p>
    </section>

    <section class="about_card">
      <h2 class="about_section_title">{{ t("about_section_mission") }}</h2>
      <p class="about_text">{{ t("about_mission_text") }}</p>
    </section>

    <section class="about_card">
      <h2 class="about_section_title">{{ t("about_section_idea") }}</h2>
      <p class="about_text">{{ t("about_idea_text") }}</p>
    </section>

    <section class="about_card">
      <h2 class="about_section_title">{{ t("about_section_tech") }}</h2>
      <p class="about_text">{{ t("about_tech_text") }}</p>
    </section>

    <section class="about_card">
      <h2 class="about_section_title">{{ t("about_section_fascination") }}</h2>
      <p class="about_text">{{ t("about_fascination_text") }}</p>
    </section>

    <!-- Zukünftiges -->
    <section class="about_grid">
      <section class="about_card">
        <h2 class="about_section_title">{{ t("about_section_future") }}</h2>
        <ul>
          <li v-for="(project, index) in projectList" :key="index">
            {{ project }}
          </li>
        </ul>
      </section>

      <section class="about_card">
        <h2 class="about_section_title">{{ t("about_section_reason") }}</h2>
        <p class="about_text">{{ t("about_reason_text") }}</p>
      </section>

      <section class="about_card">
        <h2 class="about_section_title">{{ t("about_section_personal") }}</h2>
        <p class="about_text">{{ t("about_personal_text") }}</p>
      </section>

      <section class="about_card about_card_cta">
        <h2 class="about_section_title">{{ t("about_section_contact") }}</h2>
        <p class="about_text">{{ t("about_contact_text") }}</p>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed, inject } from "vue"
import { useText } from "@/composables/useText"

const lang = inject("lang") // ref("de") aus main.js
const { t } = useText(lang)

const projectList = computed(() =>
  (t("about_future_elements") || "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
)
</script>


<style lang="scss" scoped>
.about_page {
  max-width: 900px;
  margin: 100px auto;
  padding: 0 20px 60px;
}

.about_page_title {
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
}

.about_header {
  text-align: center;
  margin-bottom: 40px;
}

.about_title {
  font-size: 16px;
  color: #666;
}

/* Sections */
.about_card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.about_section_title {
  font-size: 20px;
  margin-bottom: 12px;
}

.about_meta {
  font-size: 14px;
  color: #777;
  white-space: pre-line;
  margin-bottom: 10px;
}

.about_text {
  line-height: 1.6;
  color: #333;
}

/* Grid für kleinere Bereiche */
.about_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
