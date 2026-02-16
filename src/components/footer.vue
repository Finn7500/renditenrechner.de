<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-left">
                &copy; 11.02.2026 Finn
            </div>
            <div class="footer-right">
                <ul class="footer-nav">
                    <li>
                        <RouterLink to="/imprint">Impressum</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/privacyPolicy">Datenschutz</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Kontakt</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.footer {
    left: 0;
    right: 0;
    color: $color-primary;
    box-shadow: $shadow-sm;
    background-color: $color-text-secondary;
    padding: 20px $spacing-container-xl;
    // position: fixed;
    bottom: 0;


    .footer-content {
        display: flex;
        align-items: center; // In der Mitte
        justify-content: space-between;
        gap: $spacing-sm;
    }

    .footer-left {
        font-size: $font-size-sm;
    }

    .footer-right {
        .footer-nav {
            list-style: none;
            display: flex;
            gap: $spacing-md;
            padding: 0;
            margin: 0;

            li a {
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
</style>