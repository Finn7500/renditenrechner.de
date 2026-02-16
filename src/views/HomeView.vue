<template>
    <h1 class="headline">{{ t("home_title") }}</h1>
    <p></p>
    <section class="row">
        <img :src="bigCash">
        <div class="imgText">
            <h2>{{ t("image_1_header") }}</h2>
            <p>{{ t("image_1_text") }}</p>
        </div>
    </section>

    <section class="row reverse">
        <img :src="presentation">
        <div class="imgText">
            <h2></h2>
            <p></p>
        </div>
    </section>

    <section class="row">
        <img :src="scamGrannys">
        <div class="imgText">
            <h2></h2>
            <p></p>
        </div>
    </section>

</template>

<script setup>
import { inject } from "vue";
import { useText } from "@/composables/useText";

const lang = inject("lang")
const { t } = useText(lang)

// Bilder
import bigCash from "@/assets/images/bigCash.png";
import presentation from "@/assets/images/presentation.png";
import scamGrannys from "@/assets/images/scamGrannys.png";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.headline {
    font-size: clamp(48px, 6vw, 80px);
    text-align: center; //zentrieren
    margin-top: 60px; //Abstand oben
    margin-bottom: 20px; //Abstand unten
}

//hero
p {
    text-align: center; //zentrieren
    max-width: 820px; //zeilen nicht zu lang
    margin: 0 auto 80px auto; //abstand links rechts auto oben 0 unten 80
    font-size: 20px; //größe
    line-height: 1.6; // zeilen abstand
}


.row {
  display: flex; // bild und text nebeneinander
  align-items: center; //vertikal in mitte bild und text gleiche höhe
  gap: 60px; //abstand zwischen bild und text
  margin: 120px $spacing-container-xl; //abstand oben/unten 120 rechtslinks 80

  img {
    border-radius: 30px; //runde ecken
    width: 480px;
    height: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.03); //mit hover, bild 3% größer
  }
}

.imgText {
  max-width: 600px;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 1.3;
  }

  p {
    text-align: left;
    margin: 0;
    font-size: 17px;
  }
}


.reverse {
    flex-direction: row-reverse;
}
</style>