<template>
    <div class="header">
        <div class="left">Logo</div>

        <div class="center">
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/career">Career</RouterLink>
                </li>
            </ul>
        </div>

        <div class="right">
            <button :class="{ active: lang === 'de' }" @click="setLang('de')">DE</button>
            <span>|</span>
            <button :class="{ 'active': lang === 'en' }" @click="setLang('en')">EN</button>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue"

// holen uns die globale Sprache (das gleiche ref aus main.js)
const lang = inject("lang")

const setLang = (newLang) => {
    lang.value = newLang
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.header {
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    color: $color-primary;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: $color-text-secondary;
    padding: 0 $spacing-container-xl;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.center {
    ul {
        list-style: none;
        display: flex;
        gap: $spacing-md;
        margin: 0;
        padding: 0;

        li {
            a {
                text-decoration: none;
                color: $color-primary;
                font-weight: bold;
                padding: 8px 12px;
                transition: all 155ms ease-in-out;
                font-size: 22px;

                &:hover {
                    color: $color-text-primary;
                }
            }
        }
    }

}

.right {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        background: transparent;
        border: 2px solid transparent;
        padding: 6px 14px;
        font-size: 14px;
        font-weight: bold;
        color: $color-primary;
        cursor: pointer;
        border-radius: 6px;
        transition: all 180ms ease;

        &:hover {
            border-color: $color-primary;
            background-color: rgba(255, 255, 255, 0.05);
        }

        &:active {
            transform: scale(0.95);
            border-color: $color-primary;
            background-color: rgba(255, 255, 255, 0.08);
        }
    }

    span {
        opacity: 0.4;
        font-weight: bold;
    }
}

.active {
    background-color: blue;
}
</style>