<template>
    <v-footer class="pa-4 blue darken-1" absolute>
        <v-flex offset-md5>
        <div>&copy; {{ new Date().getFullYear() }} — Андрей Копанёв. Все права защищены</div>
        </v-flex>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer {
        left: 0;
        bottom: 0;
        color: #fff;
    }
</style>
