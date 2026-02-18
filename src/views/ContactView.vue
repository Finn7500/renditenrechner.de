<template>
  <main class="page">
    <h1>{{ t("contact") }}</h1>
    <p class="contact-intro">
      {{ t("contact-intro") }}
    </p>

    <section class="contact-box">
      <p><strong>Email:</strong> <a href="mailto:webmaster@renditenrechner.de">webmaster@renditenrechner.de</a></p>
      <p><strong>Location:</strong> Germany</p>
    </section>

    <section class="contact-form">
      <form>
        <div class="contact-form-top">
          <label>Name: </label>
          <input type="text">
          <label>{{ t("email") }}:</label>
          <input type="email">
        </div>
        <div class="contact-form-message">
          <label>{{ t("message") }}:</label>
          <textarea class="contact-form-textarea"></textarea>
        </div>
        <div class="contact-form-button">
          <button type="submit">{{ t("submit") }}</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 800px;

  &-top {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    width: 100%;
    label {
      text-align: left;
    }
    
    input {
      width: 100%;
      padding: 12px 24px;
      border-radius: $border-radius-sm;
      border: 1px solid $grey;
    }
    
  }
  
  &-message {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    width: 100%;
  }

  &-textarea {
    width: 100%; // bezieht sich auf parent container
    min-height: 120px;
    padding: 12px 24px;
    outline: none;
    border: 1px solid $grey;
    border-radius: $border-radius-sm;
    box-shadow: $shadow-sm;
    resize: vertical;
  }

  button {
        position: absolute;
        border: 1px solid $grey;
        padding: 6px 14px;
        // font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 6px;
        transition: all 75ms ease-in-out;

        &:hover {
          color: $white;
          background-color: $color-primary;
        }

        &:active {
            transform: scale(0.95);
        }
    }

  span {
    padding: 0 4px;
  }

  

}

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
